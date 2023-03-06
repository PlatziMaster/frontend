import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Academic from './components/Academic';
import Languages from './components/Languages';
import Interest from './components/Interest';

function App() {
  return (
    <div className='container-main'>
      <Header />
      <Profile />
      <div className='app-container'>
        <Experience />
        <Academic />
      </div>
      <div className='app-container'>
        <Skills />
        <div className='vertical-container '>
          <Interest />
          <Languages />
        </div>
      </div>
    </div>
  );
}

export default App;
