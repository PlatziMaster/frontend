import React from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
// import Profile from '../components/Profile';
import Experience from '../components/Experience';
// import Academic from '../components/Academic';
// import Skills from '../components/Skills';
// import Interest from '../components/Interest';
// import Languages from '../components/Languages';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      {/*
      <Profile />
      <Academic />
      <Skills />
      <Interest />
      <Languages /> */}
    </>
  );
};

export default App;
