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
      <div className='inicio'>
        <h1 className='titulo-principal'>Mi web personal</h1>
      </div>
      <Header avatar={avatar} name={name} job_title={profession}>
        <About phone={phone} email={email} website={website} address={address} />
        <Profile profile={userProfile} />
      </Header>
      <Experience experience={data.experience} />
      <div className='other'>
        <Academic academic={data.userAcademic} />
        <Skills skills={data.skills} />
        <Interest interest={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </>
  );
};

export default App;
