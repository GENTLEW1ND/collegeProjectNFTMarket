import React, { useEffect, useState, useContext } from 'react'

//INTRNAL IMPORT 
import Style from '../styles/search.module.css'
import { Slider, Brand, Loader} from '../components/ComponentIndex'
import { SearchBar } from '../SearchPage/SearchBarIndex.jsx'
import { Filter } from '../components/ComponentIndex'
import { NFTCardTwo, Banner } from '../collectionPage/collectionIndex.jsx'
import images from '../img'

import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext.js'

const search = () => {

  const { fetchNFTs,setError } = useContext(NFTMarketplaceContext)
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await fetchNFTs();
        setNfts(items.reverse());
        setNftsCopy(items);
      } catch (error) {
        setError("Please reload the browser");
      }
    };
    fetchData();

  }, []);

  // Log the updated nfts state when it changes
  useEffect(() => {
    console.log(nfts);
  }, [nfts]);


  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3, 
  //   images.nft_image_2,
  //   images.nft_image_3,
  // ]

  //ADDING A FILTER WHILE YOU SEARCH ANYTHING
  const onHandleSearch = (value) => {
    const filteredNfts = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    )
    if (filteredNfts.length === 0) {
      setNfts(nftsCopy)
    } else {
      setNfts(filteredNfts)
    }
  }

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy)
    }
  }

  return (
    <div className={Style.search}>
      <Banner bannerImage={images.creatorbackground10} />
      <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch} />
      <Filter />
      {nfts.length == 0 ? <Loader/> :  <NFTCardTwo NFTData={nfts} />}
      <Slider />
      <Brand />
    </div>
  )
}


export default search