import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Profile from "../Profile/ProfileDP";

function Header() {
  return (
    <header className="flex  justify-between gap-2 items-center">
      <Navbar />
      <Search />
      <Profile />
    </header>
  );
}

export default Header;
