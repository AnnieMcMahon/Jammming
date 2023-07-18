import React from 'react';
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults() {
  return (
    <div id="search-results">
      <h2>Results</h2>
      <TrackList />
    </div>
  );
};
export default SearchResults;