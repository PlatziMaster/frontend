import React from 'react';
import '../styles/App.styl';
import '../styles/Media.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import ExperienceCard from '../components/ExperienceCard'
import AcademicCard from '../components/AcademicCard'
import SkillsCard from '../components/SkillsCard'
import InterestCard from '../components/InterestCard'
import LanguagesCard from '../components/LanguagesCard'

import getData from '../utils/getData'

const API = 'http://localhost:3000/initialState';

const App = () => {
  const infoCV = getData(API);
  return (
    <>
      <Header personalInfo={infoCV.personalInfo}>
        <About />
      </Header>
      <Profile profile={infoCV.profile} />
      {infoCV.experience?.length > 0 && (
         <Experience>
           {infoCV.experience.map(item =>
              <ExperienceCard key={item.id} {...item} />
            )}
         </Experience>
      )}
      {infoCV.academic?.length > 0 && (
        <Academic>
          {infoCV.academic.map(item =>
            <AcademicCard key={item.id} {...item} />
          )}
        </Academic>
      )}
      {infoCV.skills?.length > 0 && (
        <Skills>
          {infoCV.skills.map(item =>
            <SkillsCard key={item.id} {...item} />
          )}
        </Skills>
      )}
      {infoCV.interest?.length > 0 && (
        <Interest>
          {infoCV.interest.map(item =>
            <InterestCard key={item.id} {...item} />
          )}
        </Interest>
      )}
      {infoCV.languages?.length > 0 && (
        <Languages>
          {infoCV.languages.map(item =>
            <LanguagesCard key={item.id} {...item} />
          )}
        </Languages>
      )}
    </>
  )
};

export default App;
