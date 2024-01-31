//  THIS IS USE FOR ROUTING AND 
// NAVIGATION PURPOSE.
import React from "react";
import Link from "next/link";

//  INTERNAL IMPORT
import Style from "./HelpCenter.module.css";
const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact us",
      link: "contactus",
    },
    {
      name: "Sign up",
      link: "sign-up",
    },
    {
      name: "Sign in",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscritpion",
    },
  ];
  return (
    <div className={Style.box}>
      {
        helpCenter.map((el, i)=>(
          <div className={Style.helpCenter}>
            <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
          </div>
        ))
      }
    </div>
    )
};

export default HelpCenter;
