import React, { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';
//Components
import Hero from '../components/Hero';

//Styles
import '../styles/components/App.styl';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    // eslint-disable-next-line arrow-parens
    fetchData('http://localhost:3000/data').then(collectedData => {
      setData(collectedData);
    });
  }, []);

  return (
    <>
      {data && (
        <Hero title={data.title} name={data.name} description={data.profile} />
      )}
    </>
  );
};
export default App;
