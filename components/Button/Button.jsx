import React from "react";

//INTERNAL IMPORT
import Style from "./Botton.module.css";

const Button = ({ btnName, handleClick }) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={()=>handleClick()}>{btnName}</button>
    </div>
  );
};

export default Button;
