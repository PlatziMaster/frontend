import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Main from '../components/Main';
import getData from '../utils/getData';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  const api = 'http://localhost:3000/data';

  const [data, setData] = useState({});

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Header
        avatar={data.avatar}
        name={data.name}
        profession={data.profession}
      >
        <About
          phone={data.phone}
          email={data.email}
          website={data.website}
          address={data.address}
          social={data.social}
        />
      </Header>
      <Main>
        <Profile
          profile={data.Profile}
        />
        <Experience
          experiences={data.experience}
        />
        <Certificates
          certificates={data.certificate}
        />
        <Academic
          academic={data.Academic}
        />
        <Skills
          skill={data.skills}
        />
        <Interest
          interests={data.interest}
        />
        <Languages
          language={data.languages}
        />
      </Main>
    </>
  );
};

export default App;
