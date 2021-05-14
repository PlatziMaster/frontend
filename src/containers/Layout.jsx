import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skils';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import '../styles/containers/Layout.css'


const Layout = () => {
  return (
    <div className="Layout">
      <Header>
        <About></About>
      </Header>
      <Profile/>
      <Experience/>
      <Academic/>
      <Skills/>
      <Interest/>
      <Languages/>
    </div>
  )
};

export default Layout;
