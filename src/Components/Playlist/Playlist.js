import React from 'react';
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(prop) {
  return (
    <div id="playlist">
      <h2>New Playlist</h2>
      <TrackList songs={prop.songs}/>
      <button id="save-btn" type="submit">SAVE TO SPOTIFY</button>
    </div>
  );
};
export default Playlist;