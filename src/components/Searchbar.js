import React, { useState } from "react";
import "./search.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm(""); // Reset the search term after search
  };

  return (
    <div className="wrap">
      <div className="container">
        <div className="search-container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search by brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button id="searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

