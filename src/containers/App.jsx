import React from 'react';
import Academic from '../components/Academic';
// import '../styles/components/App.styl';
// import Container from '../components/Container';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Interest from '../components/Interest';
import Languajes from '../components/Languajes';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import { getData } from '../hooks/getData';


const App = () => {
  const myData = getData()
  // console.log(myData.data)
  const {name,phone,avatar,profession,email,website,address,url,image,profile,experience,academic,skills,languages,interest} = myData.data;
  // console.log(name,phone,avatar)
  return (
    <>
      <Header 
        title="Header"
        name={name}
        phone={phone}
        avatar={avatar}
        profession={profession}
        email={email}
        website={website}
        address={address}
        />

      <Profile
        title="Profile"
        profile={profile}
        profession={profession}
      />
      <Experience
        title = "Experience"
        experience = {experience}
      />
      <div className="row mx-1">
        <div className="col-md-6">
        <Academic 
          title="Academic"
          academic={academic}
        />
        </div>
        <div className="col-md-6">
        <Skills 
          title="Skills"
          skills={skills}
        />
        </div>
      </div>
      <div className="row mx-1">
        <div className="col-md-6">
          <Interest 
            title="Interest"
            interest={interest}
          />
        </div>
        <div className="col-md-6">
          <Languajes 
            title="Languages"
            languages={languages}
          />
        </div>
      </div>
    </>
  )
};

export default App;
