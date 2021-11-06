import React, { forwardRef } from "react";
import { ArrowDown } from "../../assets";
import { listDropDown } from "../../utils/navbarOptions";
import "./navbar.css";

const Navbar = ({ open }, ref) => {
  return (
    <nav className="nav">
      <ul className={`${open ? "open" : "close"}`} ref={ref}>
        {listDropDown.map((item) => (
          <li>
            {item.title}
            {item.arrowDown === true && (
              <ArrowDown width="10px" height="10px" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const forwardRefNavbar = forwardRef(Navbar);

export default forwardRefNavbar;
