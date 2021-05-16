import React, {useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData.js';

const App = () => {

  const [Info, setInfo] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data').then((resp) => {
      setInfo(resp)
    });
  },[])
  
  return (
    <>
      <Header {...Info}>
        <About {...Info}/>
      </Header>
      <Profile {...Info}/>
      <Experience {...Info}/>
      <Academic {...Info}/>
      <Skills {...Info}/>
      <Interest {...Info}/>
      <Languages {...Info}/>
    </>
  )
};

export default App;
