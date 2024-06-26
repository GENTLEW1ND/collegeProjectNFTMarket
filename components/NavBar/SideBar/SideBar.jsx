import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu, connectWallet, currentAccount }) => {
  //-------USE STATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const router = useRouter();

  // ----------DISCOVER NAVIGATION MENU
  const discover = [
    // {
    //   name: "Collection",
    //   link: "collection",
    // },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    // {
    //   name: "NFT Details",
    //   link: "nft-details",
    // },
    // {
    //   name: "Account Setting",
    //   link: "account-setting",
    // },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    // {
    //   name: "Blog",
    //   link: "blog",
    // },
  ];
  //-------HELP CENTER
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact us",
      link: "contact-us",
    },
    // {
    //   name: "Sign up",
    //   link: "sign-up",
    // },
    // {
    //   name: "Sign in",
    //   link: "sign-in",
    // },
    // {
    //   name: "Subscription",
    //   link: "subscritpion",
    // },
  ];

  // FUNCTIONS
  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };
  
  const openHelpMeny = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Discover the most outstanding article on all the topics of NFT and
          your own stories and share them.
        </p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMeny()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sidebar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sideBar_button}>
      {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
                <Button btnName="Create" handleClick={()=>router.push('/uploadNFT')} />            
            )}
        <Button btnName="Connect Wallet" handleClick={()=>{}}/>
      </div>
    </div>
  );
};

export default SideBar;
