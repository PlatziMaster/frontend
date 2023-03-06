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

const App = () => {
  const [data, setData] = useState(null);
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:1000/data')
        .then(response => response.json())
        .then(d => setData(d));
    };
    fetchData();
  }, []);

  return data && (
    <>
      <Header>
        <About data={data} />
      </Header>
      <Profile data={data} />
      <Experience data={data.experience} />
      <Academic data={data.Academic} />
      <Skills data={data.skills} />
      <Interest data={data.interest} />
      <Languages data={data.languages} />
    </>
  );
};

export default App;
