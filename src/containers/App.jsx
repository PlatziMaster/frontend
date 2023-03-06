import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import '../styles/components/App.styl';
import getData from '../utils/getData';

const url = 'http://localhost:3000/data';

const App = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const ObtenerDatos = () => {
    setIsLoading(true);
    setError(false);
    getData(url)
      .then(setData)
      .catch(setError)
      .finally(setIsLoading(false));
  };

  useEffect(() => {
    ObtenerDatos();
  }, []);

  if (error) {
    return (
      <div className='container error'>
        <p className='error-msg'>Ha ocurrido un error en la carga de datos</p>
        <button onClick={ObtenerDatos}>recargar</button>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <Header
          name={data.name}
          profession={data.profession}
          avatar={data.avatar}
        ></Header>
        <About
          address={data.address}
          email={data.email}
          phone={data.phone}
          social={data.social}
        />
        <Profile profile={data.profile} />
        <Experience experience={data.experience} />
        <Academic academic={data.academic} />
        <Languages languages={data.languages} />
        <Skills skills={data.skills} />
        <Interest interest={data.interest} />
      </div>
    );
  }
};

export default App;
