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
import Social from '../components/Social';
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
    profilefl,
    profile,
    academic,
    experience,
    skills,
    interests,
    languages,
    social
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
          <Social
            social={social}
          />
          <About
            address={address}
            email={email}
            website={website}
            phone={phone}
            linkedin={linkedin}
          />
        </Header> 
        <Profile
          profile={profile}
          profilefl={profilefl}
        />
        <div id="third__section">
        <Academic
          academic={academic}
        />
        <Experience
          experience={experience}
        />
        </div>
        <div id="fourth__section">
        <Languages
            languages={languages}
        />
        <Skills
            skills={skills}
        />
        </div>
        <Interest
          interests={interests}
        />
      </main>
    </>
  )
};

export default App;
