import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import '../styles/App.styl';

import Header from '../components/Header';
/* import About from '../components/About'; */
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Certificates from '../components/Certificates';
import DataNotFound from '../components/DataNotFound';
import Loading from '../components/Loading';

import getData from '../utils/getData';

const App = () => {
  const API = 'http://localhost:3000/data';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      setData(getData(API).then(res => setData(res)));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  console.log(loading);
  console.log(error);

  if (loading === true) {
    return (
      <div className='App__container'>
        <Loading />
      </div>
    );
  }

  if (error != null) {
    return (
      <div className='App__container'>
        <DataNotFound />
      </div>
    );
  }
  if (error === null && loading === false) {
    return (
      <div className="App__container">
        <Header data={data} />
        {/*   <About />
        </Header> */}
        <Profile />
        <Experience />
        <div className="Container">
          <Academic />
          <Skills />
        </div>
        <Certificates />
        <div className="Container">
          <Interest />
          <Languages />
        </div>
      </div>
    );
  }
};
export default App;

