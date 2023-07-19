import React from 'react';
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(prop) {
  return (
    <div id="search-results">
      <h2>Results</h2>
      <TrackList songs={prop.songs} btn="+" addToPlaylist={prop.addToPlaylist}/>
    </div>
  );
};
export default SearchResults;