import React from 'react';
import '../styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Academic from './components/Academic';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Languages from './components/Languages';

import data from '../../data.json';

const App = () => {
  return (
    <>
      <Header img={data.avatar}>
        <About
          title={data.name}
          jobTitle={data.profession}
          phone={data.phone}
          email={data.email}
          website={data.website}
          adress={data.address}
        />
      </Header>
      <Profile title={data.profession} description={data.Profile} />
      <Experience title='Experience' description={data.experience} />
      <div className='grid'>
        <Academic title='Academia' description={data.Academic} />
        <Skills title='Habilidades' description={data.skills} />
        <Interest title='Intereses' description={data.interest} />
        <Languages title='Lenguajes' description={data.languages} />
      </div>
    </>
  );
};

export default App;
