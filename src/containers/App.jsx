import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import '../styles/App.styl';

import Header from '../components/Header';
// import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Certificates from '../components/Certificates';
import Loading from '../components/Loading';

import GetData from '../utils/GetData';

const API = 'https://frontend-test-resume-api.herokuapp.com/data';

const App = () => {
  const [loading, setLoading] = useState(true);

  const data = GetData(API);

  useEffect(() => {
    if (data.name != null) {
      setLoading(false);
    }
  });

  if (loading) {
    return (
      <div className='App__container'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='App__container'>
      <Header data={data} social={data.social} />
      <Profile data={data} />
      <Experience data={data.experience} />
      <div className='Container'>
        <Academic data={data.academic} />
        <Skills data={data.skills} />
      </div>
      <Certificates data={data.certificates} />
      <div className='Container'>
        <Interest data={data.interest} />
        <Languages data={data.languages} />
      </div>
    </div>
  );
};

export default App;
