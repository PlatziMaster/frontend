import React, { useState, useEffect } from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useGetData from '../hooks/useGetData';

const App = () => {
  const userData = useGetData('http://localhost:3000/data');
  return (
    <>
      <Header avatar={userData.avatar} name={userData.name}>
        <About
          about={{
            names: userData.name,
            profession: userData.profession,
            email: userData.email,
            website: userData.website,
            phone: userData.phone,
            address: userData.address,
          }}
        />
      </Header>
      <Profile profile={userData.Profile} />
      <Experience experience={userData.experience} />
      <Academic academic={userData.Academic} />
      <Skills skills={userData.skills} />
      <Interest interest={userData.interest} />
      <Languages languages={userData.languages} />
    </>
  );
};

export default App;
