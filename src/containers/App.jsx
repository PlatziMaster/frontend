import React, { useContext } from 'react';
import {
  Header,
  About,
  Profile,
  Experience,
  Academic,
  Skills,
  Interest,
  Languages,
  Loading,
} from '../components';
import { appContext } from './AppContext';
import '../styles/containers/App.styl';

const App = () => {
  /**
   * Ponemos un loader mientras traemos la data.
   * @type {Boolen} 
   */
  
  const {
    data: { loading },
  } = useContext(appContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <About />
          </Header>
          <Profile />
          <Experience />
          <Academic />
          <Skills />
          <Interest />
          {/*
          <Languages /> */}
        </>
      )}
    </>
  );
};

export default App;
