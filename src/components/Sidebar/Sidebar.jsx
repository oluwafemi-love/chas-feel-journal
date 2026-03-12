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
        <Link to="/">
          <AppLogo />
        </Link>

        <ul>
          <Link to="/MyJournals/">
            <li>
              {icons.journalIcon()}
              <span>Journals</span>
            </li>
          </Link>

          <Link to="/QuotesPage/">
            <li>
              {icons.sendMessageIcon()}
              <span href="#quotes">Quotes</span>
            </li>
          </Link>

          <Link to="/MyFavourites/">
            <li>
              {icons.likeHeartIcon()}
              <span href="#favourites">Favourites</span>
            </li>
          </Link>

          <Link to="/Trashs/">
            <li>
              {icons.trashBinIcon()}
              <span href="#bin">Trash</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
