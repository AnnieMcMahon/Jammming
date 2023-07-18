import React from 'react';
import "./Track.css";

function Track(prop) {
  const title = prop.song.title;
  const singer = prop.song.singer;
  return (
    <div id="track">
      <p>{title} | {singer}</p>
    </div>
  );
};
export default Track;