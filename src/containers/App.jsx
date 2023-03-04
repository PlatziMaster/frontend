import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Academic from '../components/Academic';
import getData from '../utils/getData';

const App = () => {
  const api = 'http://localhost:3000/data';

  const [data, setData] = useState([]);

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => console.error(error));
  }, []);

  const {
    name,
    avatar,
    profession,
    address,
    email,
    website,
    profile,
    experience,
    academic,
    skills,
    interest,
    languages,
    phone,
  } = data;

  return (
    data.length === 0 ?
      <div>Loading...</div> : (
        <div>
          <Header>
            <About
              name={name}
              profession={profession}
              phone={phone}
              email={email}
              website={website}
              address={address}
              avatar={avatar}
            />
          </Header>
          <div className='two-columns'>
            <Profile
              title='Profile'
              description={profile}
            />
          </div>
          <div className='two-columns'>
            <Experience
              title='Experience'
              experience={experience}
            />
          </div>
          <div className='two-columns'>
            <Academic
              title='Academic'
              academic={academic}
            />
            <Skills
              title='Skills'
              skills={skills}
            />
          </div>
          <div className='two-columns'>
            <Interest
              title='Interest'
              interest={interest}
            />
            <Languages
              title='Languages'
              languages={languages}
            />
          </div>
        </div>
      )
  );
};

export default App;
