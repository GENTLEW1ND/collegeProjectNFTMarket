import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../ComponentIndex";
import image from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Create
            your NFTs and sell them
          </p>
          <Button btnName='Start your search'></Button>
        </div>
        <div className={Style.heroSection_box_right}>
            <Image src={image.hero} alt="Hero section" width={600} height={600}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
