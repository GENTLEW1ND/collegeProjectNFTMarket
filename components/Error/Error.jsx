import React, { useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Error.module.css";
import images from "../../img";

//SMART CONRTACT IMPORT CONTEXT";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const Error = () => {
  const { error, setOpenError } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.Error} onClick={()=>setOpenError(false)}>
      <div className={Style.Error_box}>
        <div className={Style.Error_box_info}>
          <Image
          src={images.nft_1}
            alt="error"
            width={200}
            height={200}
            className={Style.Error_box_info_img}
            objectFit="cover"
          />
          <p>{error}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Error;
