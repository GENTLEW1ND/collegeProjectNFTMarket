import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "../styles/reSaleToken.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/ComponentIndex";

//IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";

const reSaleToken = () => {
  const { createSale } = useContext(NFTMarketplaceContext);

  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const { id, tokenURI } = router.query;

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);

    setImage(data.image);
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resale = async () => {
    try {
        await createSale(tokenURI, price, true, id);
        router.push("/author");
    } catch (error) {
        console.log("Error while re-selling nfs:", error);
    }
   
  };

  return (
    <div className={Style.reSaleToken}>
      <div className={Style.reSaleToken_box}>
        <h1>RESALE YOUR TOKEN, SET PRICE</h1>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Price</label>
          <input
            type="number"
            min={1}
            placeholder="Re-Sale price"
            className={formStyle.Form_box_input_userName}
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>

        <div className={Style.reSaleToken_box_image}>
          {image && (
            <img src={image} alt="re-sale nft" width={400} height={400} />
          )}
        </div>

            <div className={Style.reSaleToken_box_btn}>
                <Button btnName="Re-sale NFT" handleClick={()=>resale()}/>
            </div>
            
      </div>
    </div>
  );
};

export default reSaleToken;
