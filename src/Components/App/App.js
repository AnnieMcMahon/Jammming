import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { getSearchResults } from '../../util/spotifyApi';

function App() {
  const trackList = [
    { id: 1, title: "Always", singer: "Bryan Adams", album: "Bryan Adams", uri: "12345abcde" },
    { id: 2, title: "New Town Velocity", singer: "Johnny Marr", album: "Johnny", uri: "klsjdflajdslfhasd" },
    { id: 3, title: "Bold", singer: "Liam Gallagher", album: "Liam", uri: "lasdkjfaicoasd" },
    { id: 4, title: "Run To You", singer: "Bryan Adams", album: "Bryan Adams", uri: "lajsd909023jl" },
    { id: 5, title: "Walk Into the Sea", singer: "Johnny Marr", album: "Johnny", uri: "kjsdcv30wiej" }
  ];

  const [listName, setListName] = useState('');
  const [songList, setSongList] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const loadSearchResults = async (searchTerm) => {
    const newTracks = await getSearchResults(searchTerm);
    setSongList(newTracks);
  };

  const addToPlaylist = track => {
    const newTrack = songList.filter(song => song.id === track);
    const isInPlaylist = playlist.filter(song => song.id === track);
    if (isInPlaylist.length === 0 && newTrack.length !== 0) {
      setPlaylist((prev) => [...prev, newTrack[0]]);
      setSongList((prev) => prev.filter(song => song.id !== track));
    };
  };

  const removeFromPlaylist = track => {
    const oldTrack = playlist.filter(song => song.id === track);
    const isInSongList = songList.filter(song => song.id === track);
    if (isInSongList.length === 0 && oldTrack.length !== 0) {
      setSongList((prev) => [...prev, oldTrack[0]]);
      setPlaylist((prev) => prev.filter(song => song.id !== track));
    };
  };

  const changeListName = (name) => {
    setListName(name);
  };

  const saveToSpotify = () => {
    const uriList = playlist.map(song => song.uri);
    console.log(`list saved: ${uriList}`);
    loadSearchResults('reset');
    setPlaylist([]);
    setListName('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar loadSearchResults={loadSearchResults} />
        <div className="container">
          <SearchResults songs={songList} addToPlaylist={addToPlaylist} />
          <Playlist songs={playlist} name={listName} removeFromPlaylist={removeFromPlaylist} changeListName={changeListName} saveToSpotify={saveToSpotify} />
        </div>
      </main>
    </div>
  );
};
export default App;
