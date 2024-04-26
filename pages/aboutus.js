import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/ComponentIndex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Raj Chakraborty",
      position: "Developer",
      images: images.founderImage,
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About us</h1>
            <p>
              We're impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millioins of people in the around the world.
            </p>
          </div>

          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero} width={600} height={600}/>
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>😎 Founder</h2>
          <p>
            {" "}
            We're impartial and independent, and every day we create
            distinctive, world class programmes and content.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
