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
import AppContext from './AppContext';
import '../styles/containers/App.styl';

const App = () => {
  return (
    <AppContext>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </AppContext>
  );
};

export default App;
