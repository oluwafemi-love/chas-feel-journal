import React from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import icons from "../../constants/icons";
import "./ViewQuotes.css";

function ViewQuotes() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ to: "/QuotesPage" });
  };
  return (
    <button onClick={handleClick} className="view-quote-trigger">
      <div className="button-content-quote">
        {icons.quoteIcon()}
        <span className="visually-hidden">View Quotes</span>
      </div>
    </button>
  );
}

export default ViewQuotes;
