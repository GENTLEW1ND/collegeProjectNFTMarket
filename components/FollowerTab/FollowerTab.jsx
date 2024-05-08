import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../img";

const FollowerTab = ({ Topcreators }) => {
  const [popular, setPopular] = useState(true);

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2>Top Creator List...</h2>
      </div>

      {/* Render FollowerTabBox only when popular is true */}
      {popular && (
        <div className={Style.followerTab_box}>
          {Topcreators.slice().reverse().map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FollowerTab;
