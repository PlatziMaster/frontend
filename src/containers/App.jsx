import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import Academic from '../components/Academic'
import Skills from '../components/Skills'
import Interest from '../components/Interest'
import Languages from '../components/languages'
import Social from '../components/Social'

const App = () => {
  return (
    <>
      <Header />
      <Profile />
      <Experience />
      <section className="first__section">
        <Academic />
        <Skills />
      </section>
      <section className="second__section">
        <Interest />
        <Languages/>
      </section>
        <Social/>
    </>
  )
};

export default App;
