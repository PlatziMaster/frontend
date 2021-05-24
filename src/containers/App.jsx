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

const App = () => {
  const api = 'data.json';
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(api)
      .then(response => response.json())
      .then(data => setData(data.data));
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const {
    name,
    profession,
    phone,
    email,
    website,
    avatar,
    address,
    profile,
    academic,
    experience,
    skills,
    interest,
    languages,
    social,
  } = data;

  return (
    <>
      <div className='page-main'>
        <div className='header-about-cv'>
          <Header
            avatar={avatar}
          />
          <About
            name={name}
            profession={profession}
            phone={phone}
            email={email}
            website={website}
            address={address}
            social={social}
          />
        </div>
        <div className='profile-cv'>
          <Profile profile={profile} />
        </div>
        <div className='experience-cv'>
          <Experience experience={experience} />
        </div>
        <div className='academic-skills-cv'>
          <Academic academic={academic} />
          <Skills skills={skills} />
        </div>
        <div className='interest-languages-cv'>
          <Interest interest={interest} />
          <Languages languages={languages} />
        </div>
      </div>
    </>
  );
};

export default App;
