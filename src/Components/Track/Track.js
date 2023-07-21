import React from 'react';
import "./Track.css";

function Track(prop) {
  const handleClick = (event) => {
    if (prop.btn === "+") {
      prop.addToPlaylist(event.target.id);
    } else {
      prop.removeFromPlaylist(event.target.id);
    };
  };

  return (
    <div className="track">
      <div className="info">
        <h3 className="title">{prop.song.title}</h3>
        <p className="info">{prop.song.singer} | {prop.song.album}</p>
      </div>
      <button className="add-btn" id={prop.song.id} onClick={handleClick}>{prop.btn}</button>
    </div>
  );
};
export default Track;