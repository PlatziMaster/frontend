import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import ExperienceItem from '../components/ExperienceItem';
import Academic from '../components/Academic';
import AcademicItem from '../components/AcademicItem';
import Skills from '../components/Skils';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import '../styles/containers/Layout.css'


const Layout = () => {

  const [ApiData, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  
  return (
    <div className="Layout">
      <Header>
        <About personalInfo={ApiData}/>
      </Header>
      <Profile personalInfo={ApiData.Profile}/>
      <Experience >
        {ApiData.experience ?
           ApiData.experience.map((item, index) => 
            <ExperienceItem key={index} item={item}/>
  
          ) : 
          <h1>cargando...</h1>
        }
      </Experience>
      <Academic>
        {ApiData.Academic ?
           ApiData.Academic.map((item, index) => 
            <AcademicItem key={index} item={item}/>
  
          ) : 
          <h1>cargando...</h1>
        }
      </Academic>
      <Skills skills={ApiData.skills}/>
      <Interest interest={ApiData.interest}/>
      <Languages languages ={ApiData.languages}/>
    </div>
  )
};

export default Layout;
