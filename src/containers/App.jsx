import React from 'react';
import '../styles/App.css';
import Header from './Header';
import About from './About';
import Profile from './Profile';
import Experience from './Experience';
import Academic from './Academic';
import Skills from './Skills';
import Interest from './Interest';
import Languages from './Languages';

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
