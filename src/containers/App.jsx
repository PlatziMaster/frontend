import React, { useEffect, useState, Fragment } from 'react';
import fetchData from '../utils/fetchData';
//Components
import Hero from '../components/Hero';

//Styles
import '../styles/components/App.styl';
import BasicInfo from '../components/BasicInfo';

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
        <Fragment>
          <Hero
            title={data.title}
            name={data.name}
            description={data.profile}
          />
          <BasicInfo
            phone={data.phone}
            profession={data.profession}
            address={data.address}
            email={data.email}
          />
        </Fragment>
      )}
    </>
  );
};
export default App;
