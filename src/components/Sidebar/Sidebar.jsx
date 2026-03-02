import React from "react";
import icons from "../../constants/icons";
import AppLogo from "../AppLogo/AppLogo";
import "./Sidebar.css";

function Sidebar({ sidebarIsOpen }) {
  return (
    <>
      <div
        className={`sidebar-menu ${sidebarIsOpen ? "" : "visually-hidden"}`}
      >
        <AppLogo />
        <ul>
          <li>
            {icons.journalIcon()}
            <span href="#home">Journals</span>
          </li>
          <li>
            {icons.sendMessageIcon()}
            <span href="#quotes">Quotes</span>
          </li>
          <li>
            {icons.likeHeartIcon()}
            <span href="#favourites">Favourites</span>
          </li>
          <li>
            {icons.trashBinIcon()}
            <span href="#bin">Dumps</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
