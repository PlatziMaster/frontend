import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import About from '../components/About';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Profile from '../components/Profile';
import Academic from '../components/Academic';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Experience from '../components/Experience';
import getData from '../utils/getData';

const App = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getData().then((response) => {
      setUserData(response);
    });
  }, []);
  return (
    <>
      {userData?.name && (
        <>
          <Header userData={userData}>
            <About />
          </Header>
          <Profile userData={userData} />
          <Experience userData={userData} />
          <Academic userData={userData} />
          <Skills userData={userData} />
          <Interest userData={userData} />
          <Languages userData={userData} />
        </>
      )}
    </>
  );
};

export default App;
