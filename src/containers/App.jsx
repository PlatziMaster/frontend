import React, { useState, useEffect } from 'react';
import '../styles/components/App.css'
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Academic from '../components/Academic';
import Certificate from '../components/Certificate';
import About from '../components/About';


import getData from '../utils/getData';

const App = () => {
  const api = 'http://localhost:3000/data';
  const [data, setData] = useState([])

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => console.error(error))
  }, [])

  const { name, profession, experience, academic, email, website, profile, skills, interest, languages, avatar, certificate, address, social } = data

  return (
    data.length === 0
      ? <div>Loading...</div>
      : <>
        <Header name={name} profession={profession} email={email} website={website} avatar={avatar} address={address} social={social}>
        </Header>
        <About>
          <Profile profile={profile} />
          </About>
          <div className="caja container__section">
            <Academic academic={academic} />
            <Experience experience={experience} />
            <Certificate certificate={certificate} />
            <Skills skills={skills} />



            <Interest interest={interest} />
            <Languages languages={languages} />


          </div>
          </>
  )
};

export default App;
