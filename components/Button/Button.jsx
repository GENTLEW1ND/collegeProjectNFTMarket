import React from "react";

//INTERNAL IMPORT
import Style from "./Botton.module.css";

const Button = ({ btnName, handleClick, icon, classStyle }) => {
  return (
    <div className={Style.box}>
      <button
        className={`${Style.button} ${classStyle}`}
        onClick={() => handleClick()}
      >
        {icon} {btnName}{" "}
        {/* &nbsp; is a html space tag we can add it between the props*/}
      </button>
    </div>
  );
};

export default Button;
