import React from 'react';
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList() {
  return (
    <div id="track-list">
      <p>Track List:</p>
      <Track />
      <Track />
      <Track />
    </div>
  );
};
export default TrackList;