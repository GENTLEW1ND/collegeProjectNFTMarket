import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import images from "../../img";
import { Button } from "../../components/ComponentIndex";

//INTERNAL IMPORT
import Style from "./AuthorProfile.module.css";

const AuthorProfileCard = ({currentAccount}) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);
  // console.log("this is from the author profile paga ",nfts)
  //Functions
  const copyAddress = ()=>{
    const copyText = document.getElementById('myInput')

    copyText.select();
    navigator.clipboard.writeText(copyText.value)
  }

  const openShare =()=>{
    if(!share){
      setShare(true)
      setReport(false)
    }else{
      setShare(false)
    }
  }
  const openReport  =()=>{
    if(!report){
      setReport(true)
      setShare(false)
    }else{
      setReport(false)
    }
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
            Panchali Chakraborty{""}{" "}
            <span>
              <MdVerified />
            </span>
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input
              type="text"
              value={currentAccount}
              id="myInput"
            />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>

          <p>
            Punk #3244 / An OG Cryptopunk Collector, hoarder of NFTs
            Contributing to @ether_cards, an NFT Monetization Platform.
          </p>

          <div className={Style.AuthorProfileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_box_share_icon}
          />

          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>
                {""}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>
                {""}
                Instagram
              </p>
              <p>
                <span>
                  <TiSocialTwitter />
                </span>
                {""}
                Twitter
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>
                {""}
                Youtube
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_box_share_icon}
          />

          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>
              Report abouse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
