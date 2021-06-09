import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const API = 'http://localhost:3000/data';

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData(API)
      .then(response => setData(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {!data ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <Header {...data.header} social={data.social}>
            <About {...data.about} />
          </Header>
          <Profile {...data.profile} />
          <Experience experience={data.experience} />
          <Academic academic={data.academic} />
          <Skills skills={data.skills} />
          <Interest interest={data.interest} />
          <Languages languages={data.languages} />
        </>
      )}
    </>
  );
};

export default App;
