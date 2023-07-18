import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [listName, setListName] = useState("New List");
  const [songList, setSongList] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const trackList = [
      { id: "1", title: "Always", singer: "Bryan Adams", album: "Bryan Adams" },
      { id: "2", title: "New Town Velocity", singer: "Johnny Marr", album: "Johnny" },
      { id: "3", title: "Bold", singer: "Liam Gallagher", album: "Liam" }
    ];
    const newPlaylist = [
      { id: "4", title: "Run To You", singer: "Bryan Adams", album: "Bryan Adams" },
      { id: "5", title: "Walk Into the Sea", singer: "Johnny Marr", album: "Johnny" }
    ];
    setListName("My Random Playlist");
    setSongList(trackList);
    setPlaylist(newPlaylist);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar />
        <div className="container">
          <SearchResults songs={songList} />
          <Playlist songs={playlist} name={listName} />
        </div>
      </main>
    </div>
  );
};
export default App;
