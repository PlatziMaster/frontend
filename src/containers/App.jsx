import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience.jsx';
import Academic from '../components/Academic.jsx';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData';

const App = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    try {
      getData('https://cv-data-kviera.onrender.com').then(({ data }) => {
        console.log(data)
        setData(data);
      });
    } catch (error) { }
  }, []);

  return (
    <>
      <Header
        name={data.name}
        profession={data.profession}
        address={data.address}
        email={data.email}
        avatar={data.avatar} />
      <Profile profile={data.profile}/>
      <Experience experience={data.experience}/>
      <div className='general-container'>
        <Academic academic={data.academic}/>
        <Skills skills={data.skills}/>
        <Interest interest={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </>
  )
};

export default App;
