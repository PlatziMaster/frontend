import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import Footer from '../components/Footer';
import '../../data.json';

const apiUrl = 'data.json';

const App = () => {
  const [curriculum, setCurriculum] = useState([]);

  useEffect(() => {
    getData(apiUrl).then(res => setCurriculum(res));
  }, []);

  return (
    <div className='app-wrapper'>
      <Header>
        <About
          name={curriculum.data?.name}
          profession={curriculum.data?.profession}
          address={curriculum.data?.address}
          email={curriculum.data?.email}
          phone={curriculum.data?.phone}
          website={curriculum.data?.website}
          avatar={curriculum.data?.avatar}
        />
      </Header>
      <Profile profile={curriculum.data?.Profile} />
      <Experience experience={curriculum.data?.experience} />
      <Academic academic={curriculum.data?.Academic} />
      <Skills skills={curriculum.data?.skills} />
      <Interest interest={curriculum.data?.interest} />
      <Languages languages={curriculum.data?.languages} />
      <Footer social={curriculum.data?.social} />
    </div>
  );
};

export default App;
