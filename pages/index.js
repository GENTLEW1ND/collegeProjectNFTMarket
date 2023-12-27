import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/index.module.css"
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Catagory, Filter } from '../components/ComponentIndex'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <Title heading="Browse by catagory"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Catagory />
      <Subscribe />
    </div>
  )
}

export default Home