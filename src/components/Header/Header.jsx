import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Profile from "../Profile/ProfileDP";
import "./Header.css";

function Header({ onToggleSidebar }) {
  return (
    <div className="my-spacing-1 my-shadow-test">
      <header className="app-wide-nav-header flex  justify-between gap-2 items-center">
        <Navbar onToggleSidebar={onToggleSidebar} />
        <Search />
        <Profile />
      </header>
    </div>
  );
}

export default Header;
