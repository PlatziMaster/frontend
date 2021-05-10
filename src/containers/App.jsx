import React from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import GlobalStyles from '../styles/GlobalStyles';
import ProfileProvider from '../store/ProfileStore';
import { ColumnLayout, ProfilePage } from '../styles/styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
        rel='stylesheet'
      />
      <ProfileProvider>
        <ProfilePage>
          <Header>
            <About />
          </Header>
          <Profile />
          <Experience />
          <ColumnLayout columns='1fr 1fr'>
            <Academic />
            <Skills />
          </ColumnLayout>
          <ColumnLayout columns='1fr 1fr'>
            <Interest />
            <Languages />
          </ColumnLayout>
        </ProfilePage>
      </ProfileProvider>
    </>
  );
};

export default App;
