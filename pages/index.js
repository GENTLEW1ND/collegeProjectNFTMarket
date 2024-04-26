import React ,{useContext, useEffect, useState} from 'react'

//INTERNAL IMPORT
import Style from "../styles/index.module.css"
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Catagory,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
  Loader
} from '../components/ComponentIndex'
import { getTopCreators } from '../TopCreator/TopCreator'

import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext'



const Home = () => {

  const {checkIfWalletConnected,fetchNFTs} = useContext(NFTMarketplaceContext);
  const[nfts, setNfts] = useState([])

  //CREATOR LIST
  const Topcreators = getTopCreators(nfts)

  useEffect(() => {
 checkIfWalletConnected()
  }, [])

  useEffect(()=>{

    const fetchTheNfts = async()=>{
      try{
      const items = await fetchNFTs();
      console.log(items);
      setNfts(items);
    } catch (error) {
    console.log("Something went wrong while fetching the nfts in the index section", error);
  }
}
  fetchTheNfts()
},[])


  

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      {Topcreators.length == 0? <Loader/> :<FollowerTab Topcreators={Topcreators}/>}
      <Title heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      {nfts && nfts.length === 0 ? <Loader /> : <NFTCard nfts={nfts} />}
      <Brand />
    </div>
  )
}

export default Home