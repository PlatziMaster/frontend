import React from 'react';
import '../styles/main.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import useInitialState from '../hooks/useInitialState.js';

const API = 'http://localhost:3000/data';
const App = () => {
  const Data = useInitialState(API);
  console.log(Data.avatar)
  return (
    <div className="container">
      <Header firstname={Data.firstname} lastname={Data.lastname} phone={Data.phone} profession={Data.profession} email={Data.email} avatar={Data.avatar} address={Data.address} languages={Data.languages} social={Data.social} />
      <div className="main-container">
        <div className="main-cards_container">
          <Profile  profile={Data.profile} />
          <Experience experience={Data.experience} />
          <Academic academic={Data.Academic} />
          <Skills skills={Data.skills}/>
          <Interest  interest={0}/>
        </div>
      </div>
    </div>
  )
};

export default App;
