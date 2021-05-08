import React from 'react';
import { Provider } from 'react-redux';

import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import store from '../store/store';
import useLoadData from '../hooks/useLoadData';


const FetchData = () => {
  useLoadData();
  return <></>;
};

const App = () => {
  return (
    <>
     <Provider store={store}>
      <FetchData />
      <Header>
        <About />
      </Header>
    {/*   <Profile />
     <Experience />
      <Academic />
{/*       <Skills />
      <Interest />
      <Languages />  */} 
      </Provider> 
    </>
  )
};

export default App;
