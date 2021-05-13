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

import getData from '../utils/getData'


const App = () => {
  const api ='http://localhost:3000/data'
  
  const [data, setData] = useState([])

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => console.error(error))
  }, [])
  
  const {
    name,
    avatar,
    profession,
    address,
    email,
    website,
    telegram,
    profile,
    experience,
    academic,
    skills,
    interest,
    languages
  } = data

  return (
    data.length === 0
      ? <div>Loading...</div>
      :<>
        <Header
          name={name}
          avatar={avatar}
          profession={profession}
        >
          <About
            address={address}
            email={email}
            website={website}
            telegram={telegram}
          />
        </Header>
        <Profile profile={profile} />
        <Experience experience={experience} />
        <Academic academic={academic} />
        <Skills skills={skills} />
        <Interest interest={interest} />
        <Languages languages={languages} />
      </>
  )
};

export default App;
