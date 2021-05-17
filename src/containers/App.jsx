import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import { Academic } from '../components/Academic';

import '../styles/containerApp.css';
import Certificates from '../components/Certificates';
import { Social } from '../components/Social';
const App = () => {
  return (
    <div className="App_container">
      <Header/>
      <Profile />
      <Experience />
      <div className="App_others">
        <Academic  />
        <Skills />
        <Interest />
        <Languages />
        <Certificates/>
        <Social/>
      </div>
      
    </div>
  )
};

export default App;
