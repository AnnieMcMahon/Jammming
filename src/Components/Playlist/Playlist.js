import React from 'react';
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(prop) {
  const songs = prop.songs;
  return (
    <div id="playlist">
      <h2>New Playlist</h2>
      <TrackList songs={songs}/>
      <button id="save-btn" type="submit">SAVE TO SPOTIFY</button>
    </div>
  );
};
export default Playlist;