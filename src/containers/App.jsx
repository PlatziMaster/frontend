import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    getData('http://localhost:3000/data').then(data => setData(data));
  }, []);

  const {
    name,
    profession,
    address,
    email,
    website,
    phone,
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

  return (
    <div>
      <Header name={name} avatar={avatar}>
        <About
          profession={profession}
          phone={phone}
          email={email}
          website={website}
          address={address}
        />
      </Header>
      <Profile profile={profile} />
      <Experience experience={experience} />
      <section className="items">
        <Academic academic={academic} />
        <Skills skills={skills} />
        <Interest interest={interest} />
        <Languages languages={languages} />
      </section>
    </div>
  );
};

export default App;
