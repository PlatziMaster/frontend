import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import '../styles/containerApp.css';
const App = () => {
  return (
    <div className="App_container">
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </div>
  )
};

export default App;
