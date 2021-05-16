import React, { useState, useEffect, Fragment } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import About from '../components/About';

const API = 'http://localhost:3000/data';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(API).then(data => setData(data));
  }, []);

  const {
    avatar,
    name,
    profession,
    phone,
    email,
    website,
    address,
    userProfile,
  } = { ...data };

  return (
    <>
      <Header avatar={avatar} name={name} job_title={profession}>
        <About phone={phone} email={email} website={website} address={address} />
      </Header>
      <span>&nbsp;&nbsp;</span>
      <Profile profile={userProfile} />
      <span>&nbsp;&nbsp;</span>
      <Experience experience={data.experience} />
      <span>&nbsp;&nbsp;</span>
      <Academic academic={data.userAcademic} />
      <span>&nbsp;&nbsp;</span>
      <Skills skills={data.skills} />
      <span>&nbsp;&nbsp;</span>
      <Interest interest={data.interest} />
      <span>&nbsp;&nbsp;</span>
      <Languages languages={data.languages} />
    </>
  );
};

export default App;
