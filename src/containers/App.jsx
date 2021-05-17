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

import getData from '../utils/getData';

const App = () => {
  const api = 'http://localhost:3030/test1';

  const [data, setData] = useState([]);

  useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => error);
  }, []);

  // const {
  //   name,
  //   avatar,
  //   profession,
  //   address,
  //   email,
  //   website,
  //   phone,
  //   profile,
  //   experience,
  //   academic,
  //   skills,
  //   interest,
  //   languages,
  // } = data;

useEffect(() => { console.log(data) 
}, [data]);

  return (
    <>
    {console.log(data, "Llegue aqui line 46")}
    {data.length > 0 && 
    <div>     <div>

    <div className="Card-up">
    <Header name={data[0].name} avatar={data[0].avatar} profession={data[0].profession} />
    <About
      address={data[0].address}
      email={data[0].email}
      website={data[0].website}
      phone={data[0].phone}
    />
    <Profile profile={data[0].profile} />
  </div>
  <Experience data={data[0].experience} />
  <div className="Columns-2">
    <Academic data={data[0].academic} className="item" />
    <Skills data={data[0].skills} className="item" />
    <Interest data={data[0].interest} className="item" />
    <Languages data={data[0].languages} className="item" />
  </div>
  
  </div>
  </div> }
    </>
  );
};

export default App;
