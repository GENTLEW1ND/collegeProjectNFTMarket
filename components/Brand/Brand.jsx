import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/ComponentIndex";
import Link from "next/link";

const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <Image
            src={images.logo}
            alt="brand logo"
            width={150}
            height={150}
            className={Style.Brand_box_left_logo}
          />
          <h1>Earn crypto with Caffixel</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={Style.Brand_box_left_btn}>
            <Link href={{pathname:'./uploadNFT'}}>
            <Button btnName="Create" handleClick={() => {}}/>
            </Link>
            {/* <Button btnName="Discover" handleClick={() => {}} /> */}
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
