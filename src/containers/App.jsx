import React, { useState, useEffect } from 'react';
import '../styles/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Social from '../components/Social';
import Profile from '../components/Profile';
import Certificate from '../components/Certificate';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
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
    profession,
    address,
    email,
    website,
    phone,
    addressIcon,
    emailIcon,
    websiteIcon,
    phoneIcon,
    avatar,
    profile,
    certificate,
    academic,
    experience,
    skills,
    interest,
    languages,
    social,
  } = data;

  return data.length != null ? (
    <div></div>
  ) : (
    <>
      <Header name={name} profession={profession} avatar={avatar}>
        <About
          address={address}
          email={email}
          website={website}
          phone={phone}
          addressIcon={addressIcon}
          emailIcon={emailIcon}
          websiteIcon={websiteIcon}
          phoneIcon={phoneIcon}
        />
        <Social social={social} />
      </Header>
      <Profile profile={profile}>
        <Certificate certificate={certificate} />
      </Profile>
      <div className="container">
        <Experience experience={experience} />
        <Academic academic={academic} />
      </div>
      <div className="container">
        <Skills skills={skills} />
        <Interest interest={interest} />
        <Languages languages={languages} />
      </div>
    </>
  );
};

export default App;
