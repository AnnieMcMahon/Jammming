import React from 'react';
import "./SearchBar.css";

function SearchBar() {
  return (
    <div id="search-bar">
      <input id="search-term" placeholder="Enter a song, album, or artist"/>
      <br />
      <button id="search-btn" type="submit">SEARCH</button>
    </div>
  );
};
export default SearchBar;