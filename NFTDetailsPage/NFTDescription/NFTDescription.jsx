import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReport,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

// INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/ComponentIndex";
import { NFTTabs } from "../NFTDetailsIndex";

// SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {

  const router = useRouter();
  const { seller } = nft; // Assuming seller is a hash

  const navigateToSellerProfile = (event) => {
    event.preventDefault();
    router.push(`/author?seller=${seller}`);
  };

  // SMART CONTRACT DATA
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenId}
          </h1>
          {/* Every nft has a name and unique id */}
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
              <small>Creator</small> <br />
                <a href="#" onClick={navigateToSellerProfile}>
                  <span>
                    {seller} <MdVerified />
                  </span>
                </a>
              </div>
            </div>

          </div>
          <div className={Style.NFTDescription_box_profile_biding}>
            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  {nft.price}ETH<span>(${nft.price * 3319.98})</span>
                </p>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              {(() => {
                try {
                  if (
                    currentAccount &&
                    nft.seller &&
                    currentAccount.toLowerCase() === nft.seller.toLowerCase()
                  ) {
                    return (
                      <div
                        className={
                          Style.NFTDescription_box_profile_biding_box_button
                        }
                      >
                        <p>You cannot buy your own nfts.</p>
                      </div>
                    );
                  } else if (
                    currentAccount &&
                    nft.owner &&
                    currentAccount.toLowerCase() === nft.owner.toLowerCase()
                  ) {
                    return (
                      <div>
                        <Button
                          icon={<FaWallet />}
                          btnName="List on Marketplace"
                          handleClick={() =>
                            router.push(
                              `/reSaleToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`
                            )
                          }
                          classStyle={Style.button}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <Button
                          icon={<FaWallet />}
                          btnName="Buy NFT"
                          handleClick={() => buyNFT(nft)}
                          classStyle={Style.button}
                        />
                      </div>
                    );
                  }
                } catch (error) {
                  console.error("Error:", error);
                  return (
                    <div
                      className={
                        Style.NFTDescription_box_profile_biding_box_button
                      }
                    >
                      <p>An error occurred</p>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;

