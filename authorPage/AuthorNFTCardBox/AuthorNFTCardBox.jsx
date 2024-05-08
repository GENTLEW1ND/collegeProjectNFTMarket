import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  nfts,
  myNfts
}) => {

  console.log("created:", created);
  console.log("myNfts:", myNfts);


  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={nfts} />}
      {created && <NFTCardTwo NFTData={myNfts} />}
     
    </div>
  );
};

export default AuthorNFTCardBox;
