import React from "react";
import { ShoppingBagIcon } from "../../assets";
import "./style.css";
const ShoppingBag = ({ counter }) => {
  return (
    <div className="container-shopping">
      <ShoppingBagIcon />
      <span>{counter}</span>
    </div>
  );
};

export default ShoppingBag;
