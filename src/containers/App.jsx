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

  const [data, setData] = useState({
    experience:[],
    Academic:[],
    skills:[],
    interest:[],
    languages:[],
  });
  
  useEffect( () => {
    getData('http://localhost:3000/data')
      .then( data => setData(data))
  }, [])

  return (
    <>
      <Header 
        name={data.name}
        profession={data.profession}
        address={data.address}
        email={data.email}
        website={data.website}
        phone={data.phone}
        avatar={data.avatar}
      />
      <Profile profile={data.Profile} />
      <Experience
        experience={data.experience}
       />
     <div className="row">
     <Academic Academic={data.Academic}/>
      <Skills skills={data.skills} />
     </div>
      <div className="row">
      <Interest interest={data.interest}  />
      <Languages languages={data.languages}  />
      </div>
    </>
  )
};

export default App;
