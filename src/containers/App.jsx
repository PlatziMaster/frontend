import React, { useState, useEffect } from 'react';

import '../styles/normalize.css';
import '../styles/App.css';
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

  const [userInfo, setUserInfo] = useState({});
  const [profile, setProfile] = useState('initialState');
  const [experience, setExperience] = useState([]);
  const [academic, setAcademic] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [interest, setInterest] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);
  // const [social, setSocial] = useState([]);

  useEffect(() => {
    getData('https://alex-json-api.herokuapp.com/data')
      .then((datos) => {

        const userInfo = {
          name: datos.name,
          profession: datos.profession,
          address: datos.address,
          email: datos.email,
          website: datos.website,
          avatar: datos.avatar,
          phone: datos.phone,
        };

        setUserInfo(userInfo);
        setProfile(datos.Profile);
        setExperience(datos.experience);
        setCertificate(datos.certificate);
        setAcademic(datos.Academic);
        setExperience(datos.experience);
        setSkills(datos.skills);
        setInterest(datos.interest);
        setLanguages(datos.languages);
        // setSocial(datos.social);

      });

  }, []);
  return (
    <div className='page'>

      <Header info={userInfo} />

      <Profile info={profile} />
      <Experience info={experience} />
      <Academic info={academic} />
      <Skills info={skills} />
      <Interest info={interest} />
      <Languages info={languages} />
      <About info={certificate} />
    </div>
  );
};

export default App;
