import React from 'react';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Wrapper } from '../styles/components/WrapperFlex';

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
  const state = useInitialData();
  return (
    <>
      <AppContext.Provider value={state}>
        <Bg />
        <GlobalStyle />
        <Header>
          <About />
        </Header>
        <Profile />
        <Experience />
        <Wrapper>
          <Academic />
          <Skills />
        </Wrapper>
        <Wrapper>
          <Interest />
          <Languages />
        </Wrapper>
      </AppContext.Provider>
    </>
  );
};

export default App;
