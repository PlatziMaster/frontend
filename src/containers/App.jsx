import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Layout from '../components/Layout';
import getData from '../utils/getData';

const App = () => {

  {/**
  
    const [state, setState] = useState([]);
  
    useEffect(() => {
      getData('http://localhost:8000/data')
        .then(data => setState(data));
    }, []);
  
    console.log(state);
  
  */}

  const initialState = {
    "name": "Melissa Walsh",
    "profession": "FrontEnd Developer",
    "address": "Bogotá, Colombia.",
    "email": "melissa@example.com",
    "website": "https://example.com",
    "phone": "3042034240",
    "avatar": "https://arepa.s3.amazonaws.com/melissa.jpg",
    "Profile": "Ignore the squirrels, you'll never catch them anyway hack, for floof tum, tickle bum, jellybean footies curly toes climb leg roll over and sun my belly, ",
    "certificate": [
      {
        "date": "Jan 2021",
        "description": "Hack up furballs try to jump onto window and fall while scratching at wall. ",
        "institution": "Platzi",
        "name": "FrontEnd Developer"
      },
      {
        "date": "Jan 2021",
        "description": "Scratch at the door then walk away wack the mini furry mouse",
        "institution": "Platzi",
        "name": "Backend Developer"
      }
    ],
    "Academic": [
      {
        "degree": "Atomic Master",
        "description": " I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms",
        "endDate": "Jan 2017",
        "institution": "MIT",
        "startDate": "Jan 2018"
      },
      {
        "degree": "Space Engineering",
        "description": "Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ",
        "endDate": "Decenber 2015",
        "institution": "Harvard",
        "startDate": "Jan 2017"
      }
    ],
    "experience": [
      {
        "company": "PugStar",
        "endDate": "Present",
        "jobDescription": "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
        "jobTitle": "Frontend",
        "startDate": "Jan 2020"
      },
      {
        "company": "CatStore",
        "endDate": "Jan 2016",
        "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
        "jobTitle": "Backend",
        "startDate": "Sept 2019"
      }
    ],
    "skills": [
      {
        "name": "HTML5",
        "percentage": "75%"
      },
      {
        "name": "CSS",
        "percentage": "25%"
      },
      {
        "name": "JavaScript",
        "percentage": "55%"
      },
      {
        "name": "React",
        "percentage": "90%"
      }
    ],
    "interest": [
      "javascript",
      "develop",
      "backend",
      "frontend"
    ],
    "languages": [
      {
        "name": "Spanish",
        "percentage": "90%"
      },
      {
        "name": "English",
        "percentage": "50%"
      }
    ],
    "social": [
      {
        "name": "facebook",
        "url": "https://facebook.com/"
      },
      {
        "name": "twitter",
        "url": "https://twitter.com/"
      },
      {
        "name": "github",
        "url": "https://github.com/"
      },
      {
        "name": "linkedin",
        "url": "https://www.linkedin.com/"
      }
    ] 
  };

  return (
    <Layout>
      <Header avatar={initialState.avatar}>
        <About data={initialState} />
      </Header>
      <Profile data={initialState} />
      <Experience data={initialState.experience} />
      <Academic data={initialState.Academic} />
      <Skills data={initialState.skills} />
      <Interest data={initialState.interest} />
      <Languages data={initialState.languages} />
    </Layout>
  );
};

export default App;
