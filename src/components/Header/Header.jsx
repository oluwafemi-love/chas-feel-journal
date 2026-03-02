import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Profile from "../Profile/ProfileDP";
import "./Header.css"

function Header({onToggleSidebar}) {
  return (
    <div className="px-4.5 py-8">
     <header className="app-wide-nav-header flex  justify-between gap-2 items-center">
      <Navbar onToggleSidebar={onToggleSidebar}/>
      <Search />
      <Profile />
    </header>
    </div>
   
  );
}

export default Header;
