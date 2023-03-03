import React, { useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
// import Profile from '../components/Profile';
// import Experience from '../components/Experience';
// import Academic from '../components/Academic';
// import Skills from '../components/Skills';
// import Interest from '../components/Interest';
// import Languages from '../components/Languages';
// import Social from '../components/Social';

const App = () => {
  // const [data, setData] = useState({});
  // const [experience, setExperience] = useState({});
  // const [academic, setAcademic] = useState({});
  // const [skills, setSkills] = useState({});
  // const [interest, setInterest] = useState({});
  // const [languages, setLanguages] = useState({});
  // const [social, setSocial] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://my-json-server.typicode.com/H3cthor/jsonTest/db')
        .then(datos => datos.json())
        .then((datos) => {
          console.log(datos.data.skills);
          // setData(datos.data);
          // setExperience(datos.data.experience);
          // setAcademic(datos.data.Academic);
          // setSkills(datos.data.skills);
          // setInterest(datos.data.interest);
          // setLanguages(datos.data.languages);
          // setSocial(datos.data.social);
        });
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <Header />
      {/* <Header data={data} /> */}
      {/* <Profile data={data} />
      <Experience data={experience} />
      <div className='estudios-habilidades'>
        <Academic data={academic} />
        <Skills data={skills} />
        <Interest data={interest} />
        <Languages data={languages} />
      </div>
      <Social data={social} /> */}
    </div>
  );
};

export default App;
