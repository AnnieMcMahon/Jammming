import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const trackList = [
    {id: 1, title: "Always", singer: "Bryan Adams"},
    {id: 2, title: "New Town Velocity", singer: "Johnny Marr"},
    {id: 3, title: "Bold", singer: "Liam Gallagher"}
  ];
  const newPlaylist = [
    {id: 4, title: "Run To You", singer: "Bryan Adams"},
    {id: 5, title: "Walk Into the Sea", singer: "Johnny Marr"},
    {id: 6, title: "I Wanna Know What Love Is", singer: "Whitney Houston"}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar />
        <div className="container">
          <SearchResults songs={trackList}/>
          <Playlist songs={newPlaylist}/>
        </div>
      </main>
    </div>
  );
};
export default App;
