import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  return (
    <>
      <Header>
        <About />
      </Header>
      <div className='Main-information'>
        <Profile />
        <Experience />
      </div>
      <div className='Other-information'>
        <Academic />
        <Skills />
        <Interest />
        <Languages />
      </div>
    </>
  );
};

export default App;
