import React from 'react';
import "./Track.css";

function Track(prop) {
  return (
    <div className="track">
      <div className="info">
        <p>{prop.song.title} | {prop.song.singer}</p>
        <p className="album">{prop.song.album}</p>
      </div>
      <button className="add-btn">+</button>
    </div>
  );
};
export default Track;