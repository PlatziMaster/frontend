import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import About from '../elements/About';
import { getData } from '../utils/getData';
import BodySection from '../components/BodySection';
import FooterSection from '../components/FooterSection';

const App = () => {
  const [data, setData] = useState();

  //Se cargan los datos de la API
  useEffect(() => {
    async function fetchData() {
      const jsonData = await getData();
      setData(jsonData);
    }
    fetchData();
  }, []);

  if (!data) {
    return <>Cargando...</>;
  }

  return (
    <>
      <About data={data} />
      <BodySection data={data} />
      <FooterSection data={data} />
    </>
  );
};

export default App;
