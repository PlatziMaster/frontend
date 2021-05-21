import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
import '../styles/App.styl';
import Header from '../components/Header';
import Academic from '../components/Academic';
import Experience from '../components/Experience';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Profile from '../components/Profile';
import Skills from '../components/Skills';

import '../../node_modules/bulma-stylus/css/bulma.css';


// import '../../node_modules/bulma/css/bulma.min.css'


const App = () => {
  const api = 'http://localhost:3000/data'
  const [data, setData] = useState([])

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => console.error(error))
  },[])

  console.log(data)

  const {
    name,
    profession,
    address,
    email,
    avatar,
    profile,
    certificate,
    academic,
    experience,
    skills,
    interest,
    languages,
    social,
  } = data;

  return (
    <>
        <div className="container is-fluid">
        <Header 
        name={name} 
        profession={profession}
        email={email}
        address={address}
        avatar={avatar}
        social={social}
        />
        <div className="columns">
          <div className="column">
            <Profile profile={profile}/>
          </div>
          <div className="column">
          <Experience />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Academic />
          </div>
          <div className="column">
            <Skills />
          </div>
        </div>
        
        <div className="columns">
          <div className="column">
            <Interest />
          </div>
          <div className="column">
            <Languages />
          </div>
        </div>
        
        
        
        
        
        </div>
    </>
  )
};

export default App;
