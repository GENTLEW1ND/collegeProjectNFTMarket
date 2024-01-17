import React from 'react'

//INTRNAL IMPORT 
import Style from '../styles/search.module.css'
import {Slider, Brand} from '../components/ComponentIndex'
import {SearchBar} from '../SearchPage/SearchBarIndex.jsx'
import {Filter} from '../components/ComponentIndex'
import {NFTCardTwo, Banner} from '../collectionPage/collectionIndex.jsx'
import images from '../img'

const search = () => {

  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3, 
    images.nft_image_2,
    images.nft_image_3,
  ]
  return(
    <div className={Style.search}>
      <Banner bannerImage={images.creatorbackground10}/>
      <SearchBar/>
      <Filter/>
      <NFTCardTwo NFTData={collectionArray}/>
      <Slider/>
      <Brand/>
    </div>
  )
}


export default search