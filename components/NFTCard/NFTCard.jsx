import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";


const NFTCard = ({nfts}) => {


  return (
    <div className={Style.NFTCard}>
      {nfts && nfts.length > 0 ?nfts.map((el, i) => (
        <Link href={{pathname: "/nftdetails", query:el}}>
          <div className={Style.NFTCard_box} key={i + 1}>
          <div className={Style.NFTCard_box_img}>
            <img
              src={el.image}
              alt="NFT images"
              width={400}
              height={400}
              className={Style.NFTCard_box_img_img}
            />
          </div>
      
          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>{el.name} #{el.tokenId}</h4>

                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>{el.price}Eth</p>
                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
        </Link>
      
      )): <div>No NFTs available</div>}
    </div>
  );
};

export default NFTCard;
