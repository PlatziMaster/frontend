import React from 'react';
import '../styles/components/App.scss';
import Header from '../components/Header';
// import About from '../components/About';
import Profile from '../components/Profile';
import ProfileItem from '../components/ProfileItem';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  return (
    <div className="parent">
      <Header /> 
      

      <Profile>
        <ProfileItem></ProfileItem>
      </Profile>
      <Experience>
        <ProfileItem></ProfileItem>
      </Experience>
      <div className="container">
      <Academic>
        <ProfileItem></ProfileItem>
      </Academic>
      <Skills>
        <ProfileItem></ProfileItem>
      </Skills>
      </div>
      <div className="container">
      <Interest>
        <ProfileItem></ProfileItem>
      </Interest>
      <Languages>
        <ProfileItem></ProfileItem>
      </Languages>
      {/* <About />
        */}
      </div>
    </div>
  )
};

export default App;
