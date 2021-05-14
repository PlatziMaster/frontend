import React from 'react';
import {
  Header,
  About,
  Profile,
  Experience,
  Academic,
  Skills,
  Interest,
  Languages,
} from '../components';
import '../styles/components/App.styl';

const App = () => {
  return (
    <>
      <Header>
        <About />
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
