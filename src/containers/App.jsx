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
import ProfileInfo from '../components/ProfileInfo';

import Layout from '../components/Layout';

import AppContext from '../utils/AppContext';
import useData from '../hooks/useData';

const App = () => {
  const state = useData();

  return (
    <AppContext.Provider value={state}>
      <Layout>
        <Header>
          <About />
        </Header>
        <Profile />
        <Experience />
        <ProfileInfo>
          <Academic />
          <Skills />
          <Interest />
          <Languages />
        </ProfileInfo>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
