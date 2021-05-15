import React, { useState, useEffect } from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Social from '../components/Social';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const data = getData();
  return (
    <>
      <Header>
        <About 
          nameTitle={data.name}
          professionJob={data.profession}
          phone={data.phone}
          email={data.email}
          website={data.website}
          address={data.address}
          avatar={data.avatar}
          />
      </Header>
      <Profile profileDesc={data.Profile} />
      <Experience experience={data.experience} />
      <Academic academic={data.Academic} />
      <Skills skills={data.skills} />
      <Interest interest={data.interest} />
      <Languages languages={data.languages} />
      <Social social={data.social} />
    </>
  )
};

export default App;
