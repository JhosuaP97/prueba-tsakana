import React from "react";
import { SearchIcon } from "../../assets";
import "./style.css";

const Search = ({ screenSize }) => {
  return (
    <div
      className={`container-search ${
        screenSize === "mobile" ? "mobile-size" : "desktop-size"
      }`}
    >
      <input type="text" placeholder="Buscar" />
      <div className="icon-search">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
