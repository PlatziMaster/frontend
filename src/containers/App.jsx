import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import GetData from '../utils/getData';

const API = "http://localhost:3000/data";

const App = () => {
// const information = GetData(API);
// console.log("app");
// console.log(information);
    const [information, setInformation] = useState({});
    useEffect(() => {
      fetch(API)
        .then(response => response.json())
        .then(data => setInformation(data));
    }, []);
  return (
    <>
      <Header>
        <About 
          name={information?.name} 
          profession={information?.profession} 
          phone={information?.profession} 
          email={information?.email} 
          website={information?.website} 
          address={information?.address} 
          avatar={information?.avatar}
        />
      </Header> 
      <Profile title="Profile" profession={information?.profession} profile={information?.profile}/>
      <Experience title="Experience" experience = {information?.experience}/>
      <Academic title="Academic" academic = {information?.academic} />
      <Interest title="Interest" interest = {information?.interest}/>
      <Skills title="Skills" skills = {information?.skills}/>
      <Languages title="Languages" languages = {information?.languages}/>
    </>
  )
  
};

export default App;
