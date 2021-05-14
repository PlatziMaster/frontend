import React from 'react';

import { GlobalStyle } from '../styles/GlobalStyle';
import '../styles/grid.css';

import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Bg from '../components/Bg';

import AppContext from '../context/AppContext';
import useInitialData from '../hooks/useInitialData';

const App = () => {
  const data = useInitialData();
  return (
    <>
      <AppContext.Provider value={data}>
        <Bg />
        <GlobalStyle />
        <Header />
        <Profile />
        <Experience />
        <div className='wrapper'>
          <Academic className='academic' />
          <Skills className='skills' />
          <Interest className='interest' />
          <Languages className='languages' />
        </div>
        <About />
      </AppContext.Provider>
    </>
  );
};

export default App;
