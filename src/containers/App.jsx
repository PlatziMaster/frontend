import React from 'react';
import '../styles/components/App.styl';
// Components
import Grid from '@material-ui/core/Grid';
import Header from '../containers/components/Header';
import Experience from '../containers/components/Experience';
import Skills from '../containers/components/Skills';
import Resume from '../containers/components/Resume';
import Certificates from '../containers/components/Certificates';
import Interests from '../containers/components/Interests';
import Languages from '../containers/components/Languages';
import PersonalInfo from '../containers/components/PersonalInfo';
// Context
import AppContext from '../utils/context';
import useData from '../functions/useData';


const App = () => {

  const data = useData();
  console.log(data);

  return (
    <AppContext.Provider value={data}>
      <>
        <Header/>
        <Experience/>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Skills/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Resume/>
          </Grid>
        </Grid>
        <Certificates/>
        <Interests/>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Languages/>
          </Grid>
          <Grid item xs={12} md={6}>
            <PersonalInfo/>
          </Grid>
        </Grid>
      </>
    </AppContext.Provider>
  )
}; 

export default App;
