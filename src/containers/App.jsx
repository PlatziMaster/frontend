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
  ErrorMessage
} from '../components';
import { appContext } from './AppContext';
import '../styles/containers/App.styl';

const App = () => {
  const {
    data: { loading, error },
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
          <Languages />
        </>
      )}
      {error && <ErrorMessage />}
    </>
  );
};

export default App;
