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
import Loading from '../components/Loading/Loading';
import getData from '../utils/getData';

const CURRICULUM_API_URL = 'https://api-curriculum-vitae.herokuapp.com';
const USER_CURRICULUM_ID = '1016049519';

const App = () => {

  const [curriculum, setCurriculum] = useState(null);
  const [error, setError] = useState('');

  const getCurriculum = async () => {
    try {
      const curriculumData = await getData(`${CURRICULUM_API_URL}/curriculum/${USER_CURRICULUM_ID}`);
      setCurriculum(curriculumData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCurriculum();
    return () => setCurriculum(null);
  }, []);

  const renderContent = () => {
    console.log(curriculum);
    return (
      <>
        <Header data={curriculum}>
          <About />
        </Header>
        <div className='Main-information'>
          <Profile data={curriculum.profile} />
          <Experience data={curriculum.experience} />
        </div>
        <div className='Other-information'>
          <Academic data={curriculum.academic} />
          <Skills data={curriculum.skills} />
          <Interest data={curriculum.interest} />
          <Languages data={curriculum.languages} />
        </div>
      </>
    );
  };

  if (error) {
    <h2>{error}</h2>;
  }

  return curriculum ? renderContent() : <Loading />;

};

export default App;
