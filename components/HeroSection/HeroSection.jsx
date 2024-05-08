import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../ComponentIndex";
import image from "../../img";
import Link from "next/link";

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
          <Link href="/search">
          <Button btnName="Start your search" handleClick={() => {}}></Button>
          </Link>
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={image.hero2}
            alt="Hero section"
            width={550}
            height={600}
            className={Style.heroSection_box_right_img}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
