import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Extras from '../components/Extras';
import { Academic } from '../components/Academic';
import Skills from '../components/Skills';

import '../styles/containerApp.css';
const App = () => {
  return (
    <div className="App_container">
      <Header/>
      <Profile />
      <Experience />
      <div className="App_others">
        <Academic  />
        <Skills />
        <Extras />
        <Extras />
        </div>
      
    </div>
  )
};

export default App;
