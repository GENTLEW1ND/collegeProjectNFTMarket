import React, { useState, useEffect } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";

const SearchBar = ({ onClearSearch, onHandleSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchItem) {
        onHandleSearch(searchItem);
      } else {
        onClearSearch();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchItem, onHandleSearch, onClearSearch]);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };


  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input type="text" placeholder="Search Nfts" onChange={handleInputChange} value={searchItem}/>
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;
