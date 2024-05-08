import React, {useState, useEffect, useContext} from 'react'
import { useRouter } from 'next/router'

//INTERNAL IMPORT 
import { Button, Catagory, Brand } from '../components/ComponentIndex'
import NFTDetailsPage from '../NFTDetailsPage/NFTDetailsPage'

//IMPORT FROM SMART CONTRACT
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext'

const NFTDetails = () => {

  const { currentAccount } = useContext(NFTMarketplaceContext)

  const [nft, setNft] = useState({
    image:"",
    tokenId:"",
    name:"",
    owner:"",
    price:"",
    seller:""
  })

  const router = useRouter();

  // useEffect(() => {
  //       if(!router.isReady) return;

  //       // Extract relevant properties from the query
  //       const { tokenId, name, owner, price, seller, image } = router.query;

  //       // Update state with extracted properties
  //       setNft({
  //         tokenId: tokenId || "",
  //         name: name || "",
  //         owner: owner || "",
  //         price: price || "",
  //         seller: seller || "",
  //         image: image || "",
  //       });
  // }, [router.isReady]);
  useEffect(()=>{
    if(!router.isReady)return;
    setNft(router.query);
  },[router.isReady])


  return (
    <div>
      <NFTDetailsPage nft={nft}/>
      <Brand/>
    </div>
  )
}

export default NFTDetails