import React from 'react';
import getData from '../utils/getData';
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
  const data = getData();
  console.log(data);
  return (
    <>
      <Header>
        <About
          title={data.name}
          jobTitle={data.profession}
          email={data.email}
          phone={data.phone}
          website={data.website}
          address={data.address}
        />
      </Header>
      <Profile profileDesc={data.Profile} />
      <Experience Experience={data.experience} />
      <Academic Academic={data.Academic} />
      <Skills Skills={data.skills} />
      <Interest Interest={data.interest} />
      <Languages Languages={data.languages} />
    </>
  );
};

export default App;
