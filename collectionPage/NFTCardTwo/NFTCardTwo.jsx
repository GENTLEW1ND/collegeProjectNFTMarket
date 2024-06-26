import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
// import images from "../../img";
import { LikeProfile } from "../../components/ComponentIndex";

const NFTCardTwo = ({ NFTData }) => {


  console.log("NFTData:", NFTData);


  return (
    <div className={Style.NFTCardTwo}>
     
      {NFTData.map((el, i) => (
        <Link href={{pathname:"/nftdetails", query:el}} key={i + 1}> 
        <div className={Style.NFTCardTwo_box}  >
          <div className={Style.NFTCardTwo_box_like}>
            <div className={Style.NFTCardTwo_box_like_box}>
              <div className={Style.NFTCardTwo_box_like_box_box}>
                <BsImage className={Style.NFTCardTwo_box_like_box_icon} />
              </div>
            </div>
          </div>

          <div className={Style.NFTCardTwo_box_img}>
            <img
              src={el.image}
              alt="NFT"
              width={265}
              height={265}
              objectFit="cover"
              className={Style.NFTCardTwo_box_img_img}
            />
          </div>

          <div className={Style.NFTCardTwo_box_info}>
            <div className={Style.NFTCardTwo_box_info_left}>
              <p>{el.name}</p>
            </div>
           
          </div>

          <div className={Style.NFTCardTwo_box_price}>
            <div className={Style.NFTCardTwo_box_price_box}>
              <small>Current Bid</small>
              <p>{el.price} ETH</p>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;
