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


const Layout = ({data}) => {
  const [ApiData, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  console.log(ApiData.experience)
  // console.log(data.experience)
  return (
    <div className="Layout">
      <Header>
        <About personalInfo={ApiData}/>
      </Header>
      <Profile personalInfo={ApiData.Profile}/>
      <Experience >

        <ExperienceItem experience={ApiData.experience}></ExperienceItem>
        {ApiData.experience.map(item => 
          <ExperienceItem key={item}/>

        )}

      </Experience>
      <Academic>
        <AcademicItem>
          
        </AcademicItem>
      </Academic>
      <Skills/>
      <Interest/>
      <Languages/>
    </div>
  )
};

export default Layout;
