import React from 'react';
import '../styles/App.styl';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Academic } from '../components/Academic';
import { Skills } from '../components/Skills';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';
import { SectionApi } from '../components/SectionApi';

const App = () => {
  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />

      <div className='container-interest'>
        <Interest />
        <Languages />
      </div>
      <Skills />
      <SectionApi />
    </>
  );
};

export default App;
