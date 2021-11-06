import React, { useState, useRef, useEffect } from "react";
import { Logo, UserIcon, HamburgerMenu } from "../../assets/";

import "./header.css";
import { Navbar, Search, ShoppingBag } from "..";
const Header = () => {
  const [counterBag, setCounterBag] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const refMenu = useRef(null);

  function handleClickOutside(e) {
    if (refMenu.current?.contains(e.target)) return;
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  }

  useEffect(() => {
    if (!openMenu) return;
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [openMenu]);

  const handleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };
  return (
    <>
      <header className="header">
        <Search screenSize="mobile" />
        <div className="navegation">
          <div className="container-mobile" onClick={handleMenu}>
            <HamburgerMenu />
          </div>
          <div className="container-logo">
            <Logo />
          </div>
          <ul>
            <li>
              <a href="#">Mujer</a>
            </li>
            <li>
              <a href="#">Hombre</a>
            </li>
            <li>
              <a href="#">Niñas</a>
            </li>
          </ul>
        </div>

        <div className="container-icons">
          <Search screenSize="desktop" />
          <div className="icons">
            <ShoppingBag counter={counterBag} />
            <UserIcon />
          </div>
        </div>
      </header>
      <Navbar open={openMenu} ref={refMenu} />
    </>
  );
};

export default Header;
