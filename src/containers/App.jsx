import React, {useState, useEffect } from 'react'
import '../styles/assets/App.css'
import Header from '../components/Header'
import Main from '../Components/Main'
import Profile from '../Components/Profile'
import Experience from '../Components/Experience'
import Courses from '../Components/Courses'
import Languages from '../Components/Languages'
import Skills from '../Components/Skills'
import Interest from '../Components/Interest'
import getData from '../utils/getData'


const App = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    try {
      getData('/data.json').then(({ data }) => {
        setUser(data);
      });
    } catch (error) {}
  }, []);

// console.log(user);

  
  return (
    <>
   
      <Header/>
      <Main>
        <Profile />
        <Experience />
        <Courses />
        <Languages/>
        <Skills />
        <Interest />
      </Main>
    </>
  )
};

export default App;
