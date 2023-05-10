import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Dropdown from "../dropdown/dropdown.js";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <p className="title"> Ping Pong</p>
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/training"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Training <i className="fas fa-caret-down" />
            </Link>
            {dropdown && (
              <Dropdown
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/shopping"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Shopping
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link to="sign-up">
          <button className="btn">Sign Up</button>
        </Link>
        <div className="icons">
          <ul className="nav-icon">
            <PermIdentityIcon />
          </ul>
          <ul className="nav-icon">
            <AddShoppingCartIcon />
          </ul>
          <ul className="nav-icon">
            <li className="search">
              <SearchIcon />
              <input
                className="search__input"
                type="text"
                placeholder="Search"
              />
              <button className="search__button">
                <i className="fas fa-search" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
