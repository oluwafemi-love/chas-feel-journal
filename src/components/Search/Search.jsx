import React from "react";
import icons from "../../constants/icons";
import "./Search.css";
import { useJournals } from "../../context/JournalContext";
import { useNavigate } from "@tanstack/react-router";

const currentUserId = "u-1a92f";

function Search() {
  const { journals } = useJournals();
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const wrapperRef = React.useRef(null);

  // Filter journals as user types
  const results = React.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return journals
      .filter((j) => j.userId === currentUserId)
      .filter((j) =>
        j.title?.toLowerCase().includes(q) ||
        j.content?.text?.toLowerCase().includes(q)
      )
      .slice(0, 6); // cap at 6 results
  }, [query, journals]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(e) {
    setQuery(e.target.value);
    setIsOpen(true);
  }

  function handleResultClick(journalId) {
    navigate({ to: `/MyJournals/$journal-in-detail/${journalId}` });
    setQuery("");
    setIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
  }

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <form role="search" className="search-input-form" onSubmit={handleSubmit}>
        <label htmlFor="search-input" className="visually-hidden">
          Search Feel Journal
        </label>
        <input
          type="search"
          name="search"
          id="search-input"
          placeholder="Search Feel Journal"
          aria-label="search"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          autoComplete="off"
        />
        <button type="submit" aria-label="Submit Search">
          <i>{icons.searchIcon()}</i>
        </button>
      </form>

      {showDropdown && (
        <ul className="search-dropdown" role="listbox">
          {results.length > 0 ? (
            results.map((journal) => (
              <li
                key={journal.id}
                className="search-result-item"
                role="option"
                onClick={() => handleResultClick(journal.id)}
              >
                <span className="result-title">
                  {journal.title || "Untitled"}
                </span>
                <span className="result-preview">
                  {journal.content.text.slice(0, 60)}...
                </span>
              </li>
            ))
          ) : (
            <li className="search-no-results">No journals found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;