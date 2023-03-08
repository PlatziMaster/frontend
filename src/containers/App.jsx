import React, {useState, useEffect} from 'react';
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

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <>
      <Header data={data}>
        <About data={data} />
      </Header>
      <Profile data={data} />
      <Experience data={data} />
      <div className="rejilla">
      <Academic data={data} />
      <Skills data={data} />
      <Interest data={data} />
      <Languages data={data} />
      </div>
    </>
  )
};

export default App;
