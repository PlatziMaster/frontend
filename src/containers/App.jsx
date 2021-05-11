import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const url = 'http://localhost:3000/data';
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(url)
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, [url]);

  const { name, profession, address, email, website, phone, avatar, profile, experience, academic, skills, interest, languages } = data;
  const header = { name, profession, address, email, website, phone, avatar };
  return (
    <>
      <Header {...header} />
      <Profile data={profile} />
      <Experience data={experience} />
      <Academic data={academic} />
      <Skills data={skills} />
      <Interest data={interest} />
      <Languages data={languages} />
    </>
  );
};

export default App;
