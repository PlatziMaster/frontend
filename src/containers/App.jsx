import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
import '../styles/App.styl';
import Header from '../components/Header';
// import About from '../components/About';
// import Profile from '../components/Profile';
// import Experience from '../components/Experience';
// import Academic from '../components/Academic';
// import Skills from '../components/Skills';
// import Interest from '../components/Interest';
// import Languages from '../components/Languages';

const App = () => {
  const api = 'http://localhost:3000/data'
  const [data, setData] = useState([])

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => console.error(error))
  },[])

  console.log(data)

  return (
    <>
    <Header />
      {/* <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages /> */}
    </>
  )
};

export default App;
