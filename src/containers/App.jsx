import React from 'react';
import '../styles/containers/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import ExperienceItem from '../components/ExperienceItem';
import Academic from '../components/Academic';
import AcademicItem from '../components/AcademicItem';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/data'


const App = () => {

  const data = useInitialState(API)

  return (
    <div className="Layout">
      <Header>
        <About personalInfo={data}/>
      </Header>
      <Profile personalInfo={data.Profile}/>
      <Experience >
        {data.experience ?
           data.experience.map((item, index) => 
            <ExperienceItem key={index} experience={item}/>
  
          ) : 
          <h1>cargando...</h1>
        }
      </Experience>
      <Academic>
        {data.Academic ?
           data.Academic.map((item, index) => 
            <AcademicItem key={index} academic={item}/>
  
          ) : 
          <h1>cargando...</h1>
        }
      </Academic>
      <Skills skills={data.skills}/>
      <Interest interest={data.interest}/>
      <Languages languages ={data.languages}/>
    </div>
  )
};

export default App;
