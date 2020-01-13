import React from 'react';

import { MainMap } from './containers/map/Map';
import { SearchBar } from './containers/searchbar/SearchBar';
import { Header } from './containers/header/Header';
import { List } from './containers/list/List';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
      <List></List>
      <MainMap></MainMap>
    </div>

  );
}

export default App;
