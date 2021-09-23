import React from 'react';
import '../styles/components/App.css';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Academic } from '../components/Academic';
import { Skills } from '../components/Skills';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <div className="Main">
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <div className="Skills-Interest">
        <Skills />
        <Interest />
      </div>

      <Languages />
    </div>
  );
};

export default App;
