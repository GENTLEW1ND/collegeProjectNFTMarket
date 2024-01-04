import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Catagory.module.css";
import images from "../../img";

const Catagory = () => {
  const CategoryArray = [
    images.creatorbackground11,
    images.creatorbackground10,
    images.creatorbackground6,
    images.creatorbackground9,
    images.creatorbackground3,
    images.creatorbackground2
  
  ];
  return (
    <div className={Style.box_category}> 
    <div className={Style.category}>
      {CategoryArray.map((el, i) => (
        <div className={Style.category_box} key={i + 1}>
          <Image
            src={el}
            className={Style.category_box_img}
            alt="Background image"
            width={180}
            height={139}
            objectFit="cover"
          />

          <div className={Style.category_box_title}>
            <span>
                <BsCircleFill/>
            </span>
            <div className={Style.category_box_title_info}>
                <h4>Entertainment</h4>
                <small>1995 NFTs</small>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default Catagory;
