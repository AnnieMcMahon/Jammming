import React from 'react';
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(prop) {
  let name = "";
  prop.name ? name = prop.name : name = "New Playlist";
  return (
    <div id="playlist">
      <h2>{name}</h2>
      <TrackList songs={prop.songs}/>
      <button id="save-btn" type="submit">SAVE TO SPOTIFY</button>
    </div>
  );
};
export default Playlist;