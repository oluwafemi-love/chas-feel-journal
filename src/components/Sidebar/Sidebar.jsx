import React from "react";
import icons from "../../constants/icons";
import AppLogo from "../AppLogo/AppLogo";
import "./Sidebar.css";
import { Link } from "@tanstack/react-router";

function Sidebar({ sidebarIsOpen }) {
  return (
    <>
      <div
        className={`sidebar-menu ${sidebarIsOpen ? "" : "visually-hidden"}`}
      >
        <AppLogo />
        <ul>
          <Link to="/MyJournals/">
            <li>
              {icons.journalIcon()}
              <span>Journals</span>
            </li>
          </Link>

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
