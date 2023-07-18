import React from 'react';
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(prop) {
  const songs = prop.songs;
  return (
    <div id="track-list">
      <p>Track List:</p>
      <Track song={songs[0]}/>
      <Track song={songs[1]}/>
      <Track song={songs[2]}/>
    </div>
  );
};
export default TrackList;