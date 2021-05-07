import React from 'react';
import '../styles/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getState from '../utils/getState';

const App = () => {
  const data = getState('http://localhost:3000/data');
  const {
    name,
    profession,
    email,
    phone,
    website,
    address,
    avatar,
    profile,
    experience,
    academic,
    skills,
    interest,
    languages,
  } = data;

  return (
    <div className='app'>
      <Header>
        <About
          name={name}
          profession={profession}
          email={email}
          phone={phone}
          website={website}
          address={address}
          avatar={avatar}
        />
        <Profile profile={profile} />
      </Header>
      <Experience experience={experience} />
      <Academic academic={academic} />
      <div className='footer'>
        <Skills skills={skills} />
        <Interest interest={interest} />
        <Languages languages={languages} />
      </div>
    </div>
  );
};

export default App;
