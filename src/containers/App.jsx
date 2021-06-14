import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Certificates from '../components/Certificates';
import getData from '../utils/getData';

const App = () => {

  const [data, setData] = useState([]); 

  useEffect(() => {
    getData('http://localhost:3000/data')
    .then(data => setData(data))
    .catch(err => console.log(err));  
  }, []); 

  return (
    <>
      <Header data={data} >
        <About data={data} />
      </Header>
      <Profile data={data}/>
      <Experience data={data}/>
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </>
  )
};

export default App;


