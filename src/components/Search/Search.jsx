import React from "react";
import icons from "../../constants/icons";
import "./Search.css";

function Search() {
  return (
    <form role="search" className="search-input-wrapper">
      <label htmlFor="search-input" className="visually-hidden">Search Feel Journal</label>
      <input
        type="search"
        name="search"
        id="search-input"
        placeholder="Search Feel Journal"
        aria-label="search"
      />
      <button aria-label="Submit Search">
        <i>{icons.searchIcon()}</i>
      </button>
    </form>
  );
}

export default Search;
