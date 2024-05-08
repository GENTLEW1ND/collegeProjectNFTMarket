import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";

import images from "../../img";
import { Button } from "../../components/ComponentIndex";

//INTERNAL IMPORT
import Style from "./AuthorProfile.module.css";

const AuthorProfileCard = ({currentAccount}) => {

  //Functions
  const copyAddress = ()=>{
    const copyText = document.getElementById('myInput')

    copyText.select();
    navigator.clipboard.writeText(copyText.value)
  }


  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image_1}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
          {currentAccount}
            <span>
              <MdVerified />
            </span>
          </h2>

            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
        </div>

      </div>
    </div>
  );
};

export default AuthorProfileCard;
