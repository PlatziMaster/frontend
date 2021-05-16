 import React, { useState, useEffect } from 'react';

import '../styles/components/App.styl';
import About from '../components/About';
import Profile from '../components/Profile';
import getData from '../utils/getData';


const App = () => { 
  const api = 'http://localhost:3000/data';

  const [data, setData] = useState([]);

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => error);
  }, []);
  
  return (
    data.length === 0 ? <div>Loading...</div> :
    <>
      <main className="main">
        <About data={data} />
        <Profile data={data} />
      </main>
    </>
  )
};

export default App;
