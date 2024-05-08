import React, { useEffect, useState, useContext } from "react";

// INTERNAL IMPORT
import Style from "../styles/upload-nft.module.css";
import { UploadNFT } from "../UploadNFT/UploadNFTIndex";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";

const uploadNFT = () => {
  const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set prefered image, name, price and description. Tokenize you nft and list in on the marketplace.
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Image</h2>
          <p>
            {" "}
            File types supported: JPG,PNG,SVG,Max size: 100 MB
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} />
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;
