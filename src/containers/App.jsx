import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Abilities from '../components/Abilities';
import Interest from '../components/Interest';
import Footer  from '../components/Footer';
const App = () => {
  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile/>
      <Experience />
      <Abilities/>
      <Interest/>
      <Footer/>
    </>
  );
};

export default App;
