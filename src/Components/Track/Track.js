import React from 'react';
import "./Track.css";

function Track(prop) {
  return (
    <div id="track">
      <p>{prop.song.title} | {prop.song.singer}</p>
    </div>
  );
};
export default Track;