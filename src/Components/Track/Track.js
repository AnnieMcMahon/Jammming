import React from 'react';
import "./Track.css";

function Track(prop) {
  return (
    <div className="track">
      <p>{prop.song.title} | {prop.song.singer}</p>
      <p>{prop.song.album}</p>
    </div>
  );
};
export default Track;