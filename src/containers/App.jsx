import React, { useState, useEffect } from 'react';

import '../styles/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import TechAndTools from '../components/TechAndTools'
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Interests from '../components/Interests';
import Languages from '../components/Languages';
import Objectives from '../components/Objectives';
import SoftSkills from '../components/SoftSkills';
import getData from '../utils/getData';

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
    profession,
    address,
    email,
    website,
    phone,
    linkedin,
    avatar,
    profile,
    academic,
    experience,
    skills,
    interests,
    languages,
    objectives,
    softSkills
  } = data

  return (
    data.length != null ? <div></div>:
    <>
      <main className="main">
        <Header
          name={name}
          profession={profession}
          avatar={avatar}
        >
          <About
            address={address}
            email={email}
            website={website}
            phone={phone}
            linkedin={linkedin}
          />
          <TechAndTools
            skills={skills}
          />
          <Objectives
            objectives={objectives}
          />
        </Header>
        <Profile
          profile={profile}
        >
          <Academic
            academic={academic}
          />
          <Experience
            experience={experience}
        />
          <div className="container">
            <Languages
                languages={languages}
            />
            <SoftSkills
                softSkills={softSkills}
            />
          </div>
          <Interests
            interests={interests}
          />
        </Profile>
      </main>
    </>
  )
};

export default App;
