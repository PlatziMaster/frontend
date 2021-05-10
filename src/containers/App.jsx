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

import GetData from '../utils/getData';

const API = "http://localhost:3000/data";

const App = () => {
  const information = GetData(API);

  return (
    <>
      <Header>
        <About information={information} />
      </Header> 
      <Profile information={information}/>
      <Experience title="Experience" experience = {information.experience}/>
      <Academic title="Academic" academic = {information.academic} />
      <Skills title="Skills" skills = {information.skills}/>
      <Interest title="Interest" interest = {information.interest} />
      <Languages title="Languages" languages = {information.languages}/>
    </>
  )
};

export default App;
