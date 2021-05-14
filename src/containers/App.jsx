import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import '../styles/components/App.styl';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      getData('/data.json').then(({ data }) => {
        setUser(data);
      });
    } catch (error) {}
  }, []);

  return (
    <>
      <Header {...user}>
        <About {...user} />
      </Header>
      <Profile {...user} />
      <Experience {...user} />
      <Academic {...user} />
      <Skills {...user} />
      <Interest {...user} />
      <Languages {...user} />
    </>
  );
};

export default App;
