import React, { useState, useRef, useEffect } from "react";
import { Logo, UserIcon, HamburgerMenu } from "../../assets/";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import "./header.css";
import { Navbar, Search, ShoppingBag } from "..";
const Header = () => {
  const [counterBag] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const refMenu = useRef(null);

  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <>
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </>
    );
  }

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
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul>
            <li>
              <CustomLink to="/mujer">Mujer</CustomLink>
            </li>
            <li>
              <CustomLink to="/hombre">Hombre</CustomLink>
            </li>
            <li>
              <CustomLink to="/ninas">Niñas</CustomLink>
            </li>
          </ul>
        </div>

        <div className="container-icons">
          <Search screenSize="desktop" />
          <div className="icons">
            <ShoppingBag counter={counterBag} />
            <Link to="login">
              <UserIcon />
            </Link>
          </div>
        </div>
      </header>
      <Navbar open={openMenu} ref={refMenu} />
    </>
  );
};

export default Header;
