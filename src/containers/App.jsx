import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
import '../styles/containers/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

export default function App() {

  const [data, setData] = useState({
    experience: [],
    Academic: [],
    certificate: [],
    skills: [],
    interest: [],
    languages: [],
    social: []
  });

  useEffect(() => {
    getData('http://localhost:3000/data').then(jsonData => setData(jsonData));
  }, []);

  return (
    <>
      <Header name={data.name} avatar={data.avatar}>
        <About
          profession={data.profession}
          phone={data.phone}
          email={data.email}
          website={data.website}
          address={data.address}
          social={data.social}
        />
      </Header>
      <Profile description={data.Profile} />
      <Experience experience={data.experience} />
      <div className="quarters">
        <Academic academic={data.Academic} certificate={data.certificate} />
        <div className="vertical">
          <Skills skills={data.skills} />
          <Interest interest={data.interest} />
          <Languages languages={data.languages} />
        </div>
      </div>
    </>
  )
}
