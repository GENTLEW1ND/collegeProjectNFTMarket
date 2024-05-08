import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter and Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet to start buy, minting and selling nfts.
          </p>
        </div>


        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter and Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Filter and Discover</h3>
          <p>
            Discover and filter the various range of nfts. 
          </p>
        </div>


        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Filter and Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Start your journey</h3>
          <p>
            Start your journey buy minting, selling and buying.
          </p>
        </div>


        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Filter and Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Contact Us</h3>
          <p>
            In any needs and queries feel free to contact us.
          </p>
        </div>


      </div>
    </div>
  );
};

export default Service;
