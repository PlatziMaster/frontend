import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Social from '../components/Social';
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
    certificate,
    social,
    username,
  } = data;

  return (
    <>
      <Header
        name= {name}
        profession={profession}
        avatar={avatar} />
      <div className='body_cv'>
        <div className='left'>
          <About
            email={email}
            phone={phone}
            website={website}
            address={address} />
          <Skills skills={skills} />
          <Languages languages={languages} />
          <Social data={social} username={username} />
        </div>
        <div className='right'>
          <Profile profile={profile} />
          <div className='divider'>-</div>  
          <Academic academic={academic} certificate={certificate} />
          <div className='divider'>-</div>  
          <Experience experience={experience} />
        </div>
    </div>
    </>
  );
};

export default App;
