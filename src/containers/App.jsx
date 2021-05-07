import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import About from '../components/About';
import AboutItem from '../components/AboutItem';
import Profile from '../components/Profile';
import ProfileItem from '../components/ProfileItem';
import Experience from '../components/Experience';
import ExperienceItem from '../components/ExperienceItem';
import Academic from '../components/Academic';
import AcademicItem from '../components/AcademicItem';
import Skills from '../components/Skills';
import SkillsItem from '../components/SkillsItem';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useCv from '../utils/getData';
import '../styles/components/App.scss';


const API = 'http://localhost:3000/data';

const App = () => {
  const cv = useCv(API);
  let id = 0;

  return (
    <div className="parent">
      <div className="grid1" >
        <section className="link">
          <nav className="menu">
            <ul>
              <li><a className="link" href="https://jorrgecruz.github.io/curriculum.html">Curriculum</a></li>
              <li><a className="link" href="https://jorrgecruz.github.io/index.html">Proyectos</a></li>
            </ul>
          </nav>
        </section>
        <Header 
          key={cv.email}  
          {...cv}
        /> 
        <About>
        <div className="about__container-items">
          {
              cv.social!=undefined?
                cv.social.map(item => 
                  <AboutItem key={item.name}{...item}></AboutItem>
                  ):''
          }
          </div>
        </About>
        <Profile title="Profile">
          <ProfileItem key={cv.email} onlyDesc={true} title={Object.keys(cv)[7]} descr={cv.Profile} ></ProfileItem>
        </Profile>
        <section className="search">
          <div className="search-container">
            <span className="search-icon">
              <img src="https://img.icons8.com/android/24/000000/search.png" alt="lupa"/>
            </span>
            <input className="search-text" type="text"/>
            <a className="micro-icon" href=""><img src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt=""/></a>
          </div>
        </section>

        <section className="empty"></section>
      </div>
      <Academic title="Academic">
        <h2>Acadmic History</h2>
        <div className="academic__container-items">
        {
            //por medio de este bloque if-else se soluciono el primer undefied al cargar la pagina
            cv.Academic!=undefined?
              cv.Academic.map(item => 
                <div className="it">
                  <div className="itInside">
                    
                    <h2>{cv.Academic.indexOf(item)+1}</h2>
                  </div>
                  <AcademicItem key={cv.Academic.indexOf(item)}{...item} ></AcademicItem>
                </div>
                ):''
        }
        </div>
      </Academic>
      <Experience title="Experience">
        <h2>Experience</h2>
        <div className="experience__container-items">
        {
          //por medio de este bloque if-else se soluciono el primer undefied al cargar la pagina
            cv.experience!=undefined?
              cv.experience.map(item => 
                //{id=cv.experience.indexOf(item)}
                <ExperienceItem key={cv.experience.indexOf(item)}{...item} index={cv.experience.indexOf(item)}></ExperienceItem>
                ):''
        }
        </div>
      </Experience>
      
      <Skills title="Skills">
        <h2>Skills</h2>
        <div className="skills__container-items">
        {
          //por medio de este bloque if-else se soluciono el primer undefied al cargar la pagina
            cv.skills!=undefined?
              cv.skills.map(item => 
                <SkillsItem key={cv.skills.indexOf(item)}{...item} index={cv.skills.indexOf(item)}></SkillsItem>
                ):''
        }
        </div>
      </Skills>

      <Interest title="Interest">
        <ProfileItem key={cv.email} onlyDesc={false} title={Object.keys(cv)[12]}{...cv} ></ProfileItem>
      </Interest>
      <Languages title="Languages">
      <h2>Languages</h2>
        <div className="skills__container-items">
          {
            //por medio de este bloque if-else se soluciono el primer undefied al cargar la pagina
              cv.languages!=undefined?
                cv.languages.map(item => 
                  <SkillsItem key={cv.languages.indexOf(item)}{...item} index={cv.languages.indexOf(item)}></SkillsItem>
                  ):''
          }
        </div>
      </Languages>
      
    </div>
  )
};

export default App;
