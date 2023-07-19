import React from 'react';
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(prop) {
  return (
    <div id="track-list">
      {prop.songs?.map(song => <Track song={song} key={song.id} btn={prop.btn} addToPlaylist={prop.addToPlaylist} removeFromPlaylist={prop.removeFromPlaylist}/>)}
    </div>
  );
};
export default TrackList;