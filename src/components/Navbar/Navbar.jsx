import React from "react";
import icons from "../../constants/icons";
import AppLogo from "../AppLogo/AppLogo";
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand visually-hidden">
          <AppLogo />
        </div>

        <button className="navbar-toggler" id="navbarToggler">
          <span>
            {icons.navBurgerIcon()}
          </span>
        </button>
     
      </nav>
    </>
  );
}

export default Navbar;
