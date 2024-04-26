import React, { useEffect, useState, useContext } from "react";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";
import { ethers, JsonRpcProvider, formatUnits } from "ethers";
import { useRouter } from 'next/router';
import axios from "axios";


//INTERNAL IMPORT
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

//---CONNECTING WITH THE SMART CONTRACT
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Error while connecting with the contract");
  }

}

export const NFTMarketplaceContext = React.createContext();


export const NFTMarketplaceProvider = ({ children }) => {


  //---USESTATE
  const [error, setError] = useState("")
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("")
  const router = useRouter();


  //---CHECK IF THE WALLET IS CONNECTED
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return (
        setOpenError(true),
        setError("Install Metamask") 
        )

      const accounts = await window.ethereum.request({
        method: "eth_accounts"
      })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        setError("No Account Found");
        setOpenError(true)
      }
      console.log(currentAccount);
    } catch (error) {
      setError("Something went wrong while connecting with the wallet", error);
      setOpenError(true)
    }
  }

  useEffect(() => {
    checkIfWalletConnected()
  }, [])

  //--- CONNECT WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return (
        setOpenError(true),
        setError("Install Metamask")
        )

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      })
      setCurrentAccount(accounts[0])
    } catch (error) {
      setError('Error while connecting with the wallet', error);
      setOpenError(true)
    }
  }

  //---UPLOAD TO THE IPFS 
  const uploadToPinnata = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `0dd06beac49d535a44f2`,
            pinata_secret_api_key: `
            95627da2ad854e81c0873810f831b3c239b76de1d41ff3fbd9fd5ccaffca0f15`,
            "Content-Type": "multipart/form-data",
          },
        });
        const imgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        return imgHash;
      } catch (error) {
        setError("Something went wrong while connecting with the ipfs", error);
        setOpenError(true)
      }
    }
  }


  //---CREATE NFT FUNCTION
  const createNFT = async (name, price, image, description) => {
    if (!name || !description || !image || !price)
      return( setError("Data is Missing"), setOpenError(true))

    const data = JSON.stringify({ name, description, image });


    try {
      const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: data,
        headers: {
          pinata_api_key: `0dd06beac49d535a44f2`,
          pinata_secret_api_key: `
          95627da2ad854e81c0873810f831b3c239b76de1d41ff3fbd9fd5ccaffca0f15`,
          "Content-Type": "application/json",
        },
      });
      // console.log("first is done");

      const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

      console.log(url);

      // console.log("second is done");
      await createSale(url, price);
      router.push('/search')
    } catch (error) {
      setError("Something went wrong while creating the nft", error);
      setOpenError(true);
      // console.log("Pinata API response:", error.response);
    }

  }

  //---CREATE SALE FUCTION
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.parseUnits(formInputPrice, "ether")
      const contract = await connectingWithSmartContract()

      const listingPrice = await contract.getListingPrice()

      const transactionPromise = !isReselling ? await contract.createToken(url, price, {
        value: listingPrice.toString()
      }) : await contract.resellToken(id, price, {
        value: listingPrice.toString()
      })

      const transaction = await transactionPromise;
      // console.log(transaction);

    } catch (error) {
      setError("Something went wrong while creating a sale", error);
      setOpenError(true)
    }
  }

  //---FETCH NFTS FUNCTION
  const fetchNFTs = async () => {
    try {
      //Create the contract instance
      const provider = new JsonRpcProvider();
      //Fetch the contract instance
      const contract = fetchContract(provider)
      //Fetch market items from the contract
      const data = await contract.fetchMarketItems()
      console.log(data);

      //Process each item fetched from the contract
      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
          //Get the token URI for the current token.
          const tokenURI = await contract.tokenURI(tokenId);

          //Fetch additional metadata form the token URI
          const response = await axios.get(tokenURI);
          const { image, name, description } = response.data;

          // const {
          //   data: { image, name, description },
          // } = await axios.get(tokenURI);

          //Format the price from the smart contract
          const price = formatUnits(
            unformattedPrice.toString(),
            "ether"
          )
          //Convert tokenId to a number.
          const tokenIdAsNumber = Number(tokenId);

          //Return processed item data
          return {
            price,
            tokenId: tokenIdAsNumber,
            seller,
            owner,
            image,
            name,
            description,
            tokenURI
          }

        }
        )
      )
      return items;
    } catch (error) {
      console.log(error);
      setError('Something went wrong while fetching nfts', error);
      setOpenError(true)
      return []
    }
  }

  useEffect(() => {
    fetchNFTs();
  }, [])

  // ---FETCHIMG MY NFT OR LISTED NFTS
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();
      const data =
        type == "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFTs();
      console.log("Data from the smart contract:", data)
      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI)

            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            const tokenIdNumber = Number(tokenId);

            return {
              price,
              tokenId: tokenIdNumber,
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.log(error);
      setError("Error while fetching listed NFTs", error);
      setOpenError(true)
    }
  };

  useEffect(() => {
    fetchMyNFTsOrListedNFTs()
  }, [])


  //-----BUY NFTS FUNCTION
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.parseUnits(nft.price.toString(), "ether");

      const transactionPromise = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      const transaction = await transactionPromise;
      // console.log(transaction);
      router.push("/author")
    } catch (error) {
      setError("Error while buying the nft");
      setOpenError(true)
    }
  };


  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkIfWalletConnected,
        connectWallet,
        uploadToPinnata,
        createNFT,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        currentAccount,
        fetchNFTs,
        createSale,
        setOpenError,
        openError,
        error,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
