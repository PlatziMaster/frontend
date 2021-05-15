 import React, { useState, useEffect } from 'react';

import '../styles/components/App.styl';
import About from '../components/About';
import Profile from '../components/Profile';
import getData from '../utils/getData';


const App = () => { 
  const api = '/data.json';

  const [data, setData] = useState([]);

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => error);
  }, []);

  const {
    name,
    avatar,
    profession,
    address,
    email,
    website,
    phone,
    profile,
    experience,
    academic,
    skills,
    interest,
    languages,
  } = data;
  
  return (
    <>
      <main className="main">
        <About data={data.data} />
        <Profile></Profile>
      </main>
    </>
  )
};

export default App;
