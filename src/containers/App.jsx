import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header.js';
import About from '../components/About.js';
import Profile from '../components/Profile.js';
import Experience from '../components/Experience.js';
import Academic from '../components/Academic.js';
import Skills from '../components/Skills.js';
import Interest from '../components/Interest.js';
import Languages from '../components/Languages.js';

const App = () => {
  return (
    <>
      <Header>
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </>
  )
};

export default App;
