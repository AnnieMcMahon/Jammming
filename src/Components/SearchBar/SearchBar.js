import React from 'react';
import "./SearchBar.css";

function SearchBar(prop) {
  let searchTerm = "";
  
  const handleChange = (event) => {
    searchTerm = event.target.value;
  }

  const handleSubmit = () => {
    prop.loadSearchResults(searchTerm);
  }

  return (
    <div id="search-bar">
      <input id="search-term" placeholder="Enter a song, album, or artist" onChange={handleChange}/>
      <br />
      <button id="search-btn" type="submit" onClick={handleSubmit}>SEARCH</button>
    </div>
  );
};
export default SearchBar;