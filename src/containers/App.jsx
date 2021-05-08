import React, {useState, useEffect} from 'react';
import '../styles/components/App.css'
import Header from '../components/Header';
import Main from '../components/Main'
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import ExperienceItem from '../components/ExperienceItem'
import AcademSkills from '../components/AcademSkills'
import Academic from '../components/Academic';
import AcademicItem from '../components/AcademicItem'
import Skills from '../components/Skills';
import SkillsItem from '../components/SkillsItem'
import InterestLanguages from '../components/InterestLanguages'
import Interest from '../components/Interest';
import InterestItem from '../components/InterestItem'
import Languages from '../components/Languages';
import LanguagesItem from '../components/LanguagesItem'
import Footer from '../components/Footer'

import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/data'

const App = () => {
  
  const data = useInitialState(API)  

  return (
    <React.Fragment>
      
      <Header {...data}/>
      
      <Main>
        <Profile {...data}/>
        
        <Experience>
        {
          data.experience?.map(
                (item,index) => <ExperienceItem
                            key={index}
                            date={item.date} 
                            description={item.description} 
                            institution={item.institution} 
                            name={item.name}/>) 
        }
        </Experience>

        <AcademSkills>
          
          <Academic>
          {
            data.academic?.map(
                (item,index) => <AcademicItem 
                            key={index} 
                            degree={item.degree} 
                            endDate={item.endDate} 
                            institution={item.institution} 
                            startDate={item.startDate}/>)
          }
          </Academic>
          
          <Skills>
            {
              data.skills?.map(
                (item,index) => <SkillsItem 
                            key={index} 
                            name={item.name}
                            percentage={item.percentage}/>)
            }
            <SkillsItem />
          </Skills>
          
        </AcademSkills>

        <InterestLanguages>
          
          <Interest>
            {
              data.interest?.map(
                (item,index) => <InterestItem key={index} interest={item}/>
              )
            }
          </Interest>          
          
          <Languages>
          {
            data.languages?.map(
                  (item,index) =><LanguagesItem 
                              key={index} 
                              name={item.name} 
                              percentage={item.percentage}/> )
          }
          </Languages>
        </InterestLanguages>
      </Main>
      
      <Footer />
    </React.Fragment>
  )
};

export default App;
