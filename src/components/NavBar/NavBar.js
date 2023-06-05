import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Dropdown from "../dropdown/dropdown.js";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import ShoppingCart from "../shoppingcart/shoppingcart.js";

function Navbar({ cartItems, removeFromCart }) {
  const location = useLocation().pathname;

  // State variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // Toggle click event for mobile menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Handle mouse enter and leave events for dropdown
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

  // Toggle shopping cart visibility
  const toggleCart = () => {
    if (showCart) {
      navigate("?cart=open");
    } else {
      navigate("?cart=close");
    }
    setShowCart(!showCart);
    setClick(false);
  };

  // Close shopping cart
  const closeShoppingCart = () => {
    setShowCart(false);
  };

  const handleToggle = () => {
    if (window.innerWidth >= 960) {
      setMenuOpen(false);
    } else {
      setMenuOpen((prevOpen) => !prevOpen);
    }
    setClick(false);
  };

  // Render the component if location condition is not met
  if (
    location === "/dashboard-home" ||
    location === "/dashboard" ||
    location === "/dashboard-Product" ||
    location === "/dashboard-Admin" ||
    location === "/dashboard-Inbox"
  ) {
    return null;
  }

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <p className="title">Spin Master</p>
          <i className="fab fa-firstdraft" />
        </Link>
        <FontAwesomeIcon
          className="toggleMenuBar"
          icon={faBars}
          onClick={handleToggle}
        />

        {/* Mobile menu icon */}
        {/* <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> */}
        <div className="menu-icon" onClick={handleToggle}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* Navigation menu */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
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
              to="/teamtraining"
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
              to="/contactus"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Sign Up button */}
        <Link to="/signup">
          <button className="btnnav">Sign Up</button>
        </Link>

        {/* Icons */}
        <div className="icons">
          <ul className="nav-icon">
            <PermIdentityIcon />
          </ul>
          <ul className="nav-icon">
            <button onClick={toggleCart} className="test">
              <AddShoppingCartIcon />
            </button>
          </ul>
        </div>

        {/* Cart counter */}
        {cartItems && cartItems.length > 0 && (
          <div className="cart-counter">{cartItems.length}</div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
