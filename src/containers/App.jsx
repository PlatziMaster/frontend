import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Layout from '../components/Layout';
import getData from '../utils/getData';

const App = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then(data => setState(data));
  }, []);

  const initialState = state;

  return (
    <Layout>
      <Header avatar={initialState.avatar}>
        <About data={initialState} />
      </Header>
      <Profile data={initialState} />
      <Experience data={initialState.experience} />
      <Academic data={initialState.Academic} />
      <Skills data={initialState.skills} />
      <Interest data={initialState.interest} />
      <Languages data={initialState.languages} />
    </Layout>
  );
};

export default App;
