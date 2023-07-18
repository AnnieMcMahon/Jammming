import React from 'react';
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(prop) {
  return (
    <div id="track-list">
      <p>Track List:</p>
      {prop.songs?.map(song => {
        return <Track song={song} key={song.id} />
      })}
    </div>
  );
};
export default TrackList;