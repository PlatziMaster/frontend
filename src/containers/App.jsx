import React, {useEffect, useState} from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData';

const App = () => {

  const [data, setData] = useState({});
  useEffect( () => {
    getData('http://localhost:3000/data')
      .then( data => setData(data))
  }, [])

  console.log(data)
  
  return (
    <>
      <Header/>
      <Profile />
      <Experience />
     <div className="row">
     <Academic />
      <Skills />
     </div>
      <div className="row">
      <Interest />
      <Languages />
      </div>
    </>
  )
};

export default App;
