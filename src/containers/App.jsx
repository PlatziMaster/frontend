import React from 'react';
import '../styles/App.styl';
import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import Interest from '../components/Interest';
import Footer from '../components/Footer'

const API = 'http://localhost:3000/data'

const App = () => {


  const data = useInitialState(API)

  return (
    <>
      <Header >
        <About about={data}/>
      </Header>
      <Main>
        <Profile profile={data}/>
        <Experience experience={data.experience} />
        <Academic academic={data.Academic} certificate={data.certificate}/>
        <Skills skills={data.skills}/>
        <Languages languages={data.languages}/>
        <Interest interest={data.interest}/>
      </Main>
      <Footer social={data.social}/>
    </>
  )
};

export default App;
