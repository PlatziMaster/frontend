import React from 'react';
import '../styles/styles.css';
import Header from '../styles/components/Header';
import About from '../styles/components/About';
import Profile from '../styles/components/Profile';
import Experience from '../styles/components/Experience';
import Academic from '../styles/components/Academic';
import Skills from '../styles/components/Skills';
import Interest from '../styles/components/Interest';
import Languages from '../styles/components/Languages';
import Footer from '../styles/components/Footer';

const App = () => {
  {
    return (
      <React.Fragment>
        <Header component={Header} />
        <About component={About} />
        <Profile component={Profile} />
        <Experience component={Experience} />
        <div className='containerOne'>
          <Academic component={Academic} />
          <Skills component={Skills} />

        </div>
        <Interest component={Interest} />

        <Languages component={Languages} />
        <Footer component={Footer} />
      </React.Fragment>
    );
  };
};

export default App;
