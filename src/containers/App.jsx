import React, { useState, useEffect } from 'react';
import Profile from '../Components/Profile';
import History from '../Components/History';
import ExperienceItems from '../Components/ExperienceItem';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Proyectos from '../Components/Proyectos';

const App = () => {
  const [ experiencias, ExperienceItem ] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => ExperienceItem(data));
  }, []);
console.log(experiencias.experience)

  return (
    <main className="sm:container my-12 mx-auto px-4 py-4 lg:px-16 ">
      <section className="items-center justify-between align-middle mb-4 ">
        <Profile />
        <History />
        <Skills />
        <Proyectos />
      </section>
    </main>
  );
};

export default App;
