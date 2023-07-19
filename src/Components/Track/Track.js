import React from 'react';
import "./Track.css";

function Track(prop) {
  const handleClick = (event) => {
    prop.addToPlaylist(event.target.id);
  };

  return (
    <div className="track">
      <div className="info">
        <p>{prop.song.title} | {prop.song.singer}</p>
        <p className="album">{prop.song.album}</p>
      </div>
      <button className="add-btn" id={prop.song.id} onClick={handleClick}>{prop.btn}</button>
    </div>
  );
};
export default Track;