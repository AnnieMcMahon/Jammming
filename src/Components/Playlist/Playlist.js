import React from 'react';
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(prop) {
  let name = "";
  prop.name ? name = prop.name : name = "";

  const handleChange = (event) => {
    const newName = event.target.value;
    if (newName.length > 0) {
      prop.changeListName(newName);
    };
  };

  return (
    <div id="playlist">
      <h2><input id="playlist-name" placeholder="Name your playlist" onChange={handleChange} value={name} /></h2>
      <TrackList songs={prop.songs} btn="-" removeFromPlaylist={prop.removeFromPlaylist} />
      <button id="save-btn" type="submit">SAVE TO SPOTIFY</button>
    </div>
  );
};
export default Playlist;