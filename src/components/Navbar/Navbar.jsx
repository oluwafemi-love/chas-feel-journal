import React from "react";
import icons from "../../constants/icons";
import AppLogo from "../AppLogo/AppLogo";
import "./Navbar.css";

function Navbar({ onToggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand visually-hidden">
        <AppLogo />
      </div>

      <button
        className="navbar-toggler"
        id="navbarToggler"
        onClick={onToggleSidebar}
      >
        <span>{icons.navBurgerIcon()}</span>
      </button>
    </nav>
  );
}

export default Navbar;