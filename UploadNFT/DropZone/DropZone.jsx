import React, { useState, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";

// INTERNAL IMPORT
import Style from "./DropZone.module.css";
import images from "../../img"
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";
import Image from "next/image";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  description,
  setImage,
  uploadToPinnata,
  price
}) => {
  const [fileUrl, setFileUrl] = useState(null);


  const onDrop = useCallback(async (acceptedFile) => {
   const url =await uploadToPinnata(acceptedFile[0]);
   setFileUrl(url)
   setImage(url)
   console.log(url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 500000000,
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              className={Style.DropZone_box_input_img_img}
              objectFit="contain"
              priority={true}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <img
              src={fileUrl}
              alt="nft image"
              width={300}
              height={300}
            />

            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <span>NFT Name:</span>
                  {name || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description:</span>
                  {description || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>price :</span>
                  {price || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
