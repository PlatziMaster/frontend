import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import ExperienceItem from '../components/ExperienceItem';
import AcademicItem from '../components/AcademicItem';
import SkillsItem from '../components/SkillsItem';
import InterestItem from '../components/InterestItem';
import LanguageItem from '../components/LanguageItem';
import getData from '../utils/getData';

const ENDPOINT = 'http://localhost:3000/data';

const App = () => {
  const data = getData(ENDPOINT);

  return (
    <div>
      <Header>
        <About
          name={data.name}
          profession={data.profession}
          phone={data.phone}
          email={data.email}
          website={data.website}
          address={data.address}
          avatar={data.avatar}
        />
      </Header>
      <Profile
        title='Profile'
        description={data.Profile}
      />
      <Experience title='Experience'>
        {data.experience && data.experience?.map((item) => {
          return (
            <ExperienceItem
              key={item.id}
              company={item.company}
              occupation={item.jobTitle}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.jobDescription}
            />
          );
        })}
      </Experience>
      <div className='two-columns'>
        <Academic title='Academic'>
          {data.Academic && data.Academic?.map((item) => {
            return (
              <AcademicItem
                key={item.id}
                degree={item.degree}
                university={item.institution}
                description={item.description}
              />
            );
          })}
        </Academic>
        <Skills title='Skills'>
          {data.skills && data.skills?.map((item) => {
            return (
              <SkillsItem
                key={item.id}
                name={item.name}
                percentage={item.percentage}
              />
            );
          })}
        </Skills>
      </div>
      <div className='two-columns'>
        <Interest title='Interest'>
          {data.interest && data.interest?.map((item) => {
            return (
              <InterestItem
                key={item.id}
                name={item.name}
              />
            );
          })}
        </Interest>
        <Languages title='Languages'>
          {data.languages && data.languages?.map((item) => {
            return (
              <LanguageItem
                key={item.id}
                name={item.name}
                percentage={item.percentage}
              />
            );
          })}
        </Languages>
      </div>
      <footer className='footer'>
        <h5>2021 By Gaby Di Grazia</h5>
      </footer>
    </div>
  );
};

export default App;
