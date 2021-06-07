import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import '../styles/components/App.styl';
import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState({
    skills: [],
    languages: [],
    interest: [],
    experience: [],
    Academic: [],
    social: [],
  });

  useEffect(() => {
    getData('http://localhost:3000/data').then(jsonData => setData(jsonData));
  }, []);

  return (
    <>
      <Header
        name={data.name}
        email={data.email}
        address={data.address}
        website={data.website}
        social={data.social}
      >
        <About />
      </Header>
      <section className="container">
        <Profile body={data.Profile} profession={data.profession} />
      </section>

      <section className="container">
        <Experience experiences={data.experience} />
      </section>

      <section className="container">
        <div className="row-grid">
          <Academic academic={data.Academic} />
          <Skills skills={data.skills} />
        </div>
      </section>
      <section className="container">
        <div className="row-grid">
          <Interest interest={data.interest} />
          <Languages languages={data.languages} />
        </div>
      </section>
    </>
  );
};

export default App;
