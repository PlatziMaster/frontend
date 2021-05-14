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

import getData from '../utils/getData';

const App = () => {
  const api = 'http://localhost:3000/data';

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
      <div className="Card-up">
        <Header name={name} avatar={avatar} profession={profession} />
        <About
          address={address}
          email={email}
          website={website}
          phone={phone}
        />
        <Profile profile={profile} />
      </div>
      <Experience data={experience} />
      <div className="Columns-2">
        <Academic data={academic} className="item" />
        <Skills data={skills} className="item" />
        <Interest data={interest} className="item" />
        <Languages data={languages} className="item" />
      </div>
    </>
  );
};

export default App;
