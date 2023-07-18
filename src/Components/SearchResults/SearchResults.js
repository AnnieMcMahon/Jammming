import React from 'react';
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(prop) {
  const songs = prop.songs;
  return (
    <div id="search-results">
      <h2>Results</h2>
      <TrackList songs={songs}/>
    </div>
  );
};
export default SearchResults;