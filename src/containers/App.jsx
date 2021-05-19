import React, {useEffect, useState} from 'react';
import '../styles/components/App.css';
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

  const [datauser, setDatauser] = useState({})

  useEffect(() => {
    getData('http://localhost:3000/data')
        .then((resp) => setDatauser(resp))
  }, []);


  return (
    <>
      <Header dataUser = {datauser}/>
      <div className="container-body">     
        <Profile dataUser={datauser}/>
        <Experience {...datauser}/>
        <div className="container-cards">        
          <Academic {...datauser}/>
          <Skills {...datauser}/>
          <Interest {...datauser}/>
          <Languages {...datauser}/>
        </div>
      </div>           
    </>
  )
};

export default App;
