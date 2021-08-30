import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import fotoCV from '../assets/images/foto.png'; 
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


import getData from '../utils/getData';
 
import { Box, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
    fontFamily: 'Roboto',
  }, 
  header: {
    display: 'flex',
    background: 'radial-gradient(circle farthest-corner at 10% 20%,  #E6E6FA 0%, rgba(220,182,232,0.3) 50.2%)',
    paddingTop: '30px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: "20px",  
    },
  },
  headerInfo: {
    padding: theme.spacing(2),
    spacing: 8
  },
  bgColorSection: {
    // backgroundColor : '#EBECF0', 
    margin: '30px 0', 
    
  },
  bgColorSectionExperience: {
    // backgroundColor : '#EBECF0', 
    [theme.breakpoints.down('sm')]: {
      display: 'block', 
    },
    margin: '30px 0',
  },
  imageCV: {
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    width: theme.spacing(28),
    height: theme.spacing(28),
    [theme.breakpoints.down('sm')]: {
      width: '150px', 
      height: '150px' 
    },
  },
  containerExperience: {
    [theme.breakpoints.down('md')]: {
      flexBasis: '100%',
    },
  }
}))


const App = () => {

  const classes = useStyles(); 

  const [infoCV, setInfoCV] = useState({ experience: [], certificate: [], Academic: [], skills: [], interest: [], languages: [], social: [] }); 

  useEffect(() => {
    getData('https://v6u094t7gf.api.quickmocker.com/data')
    // getData('http://localhost:3000/data')
    .then(data => setInfoCV(data))
    .catch(err => console.log(err));  
  }, []); 

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={12} className={classes.header}>
          <Grid item xs={4} align = "center">
            <Avatar src={fotoCV} alt="photo CV" size={80} className={classes.imageCV} />
            {/* <img className="fotoCV" src={fotoCV} alt="photo CV" /> */}
          </Grid>
        
          <Grid item xs={8} className={classes.headerInfo} ml={1}>
            <Header data={infoCV} >
              {infoCV.social.map(item =>
                <About key={item.name} {...item} />
              )}
            </Header>
          </Grid>
        </Grid>

        <Paper elevation={5} className={classes.bgColorSection}>
          <Grid item xs={12} className={classes.bgColorSection}>
            <Box mx={4}>
              <Typography variant="h4">Profile</Typography>
              <Profile data={infoCV}/>
            </Box>
          </Grid>
        </Paper>
        <Paper elevation={5}>
          <Grid item xs={12} md={12} className={classes.bgColorSectionExperience}>
            <Box ml={2}>
              <Box ml={2}>
                <Typography variant="h4" >Experience</Typography>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                lg={12}
              >
              {infoCV.experience.map(item =>
                <Box
                  className={classes.containerExperience}
                  m={2}
                  flexBasis="45%"
                >
                  <Experience key={item.company} {...item} />
                </Box>  
                )}
              </Box>
            </Box>
          </Grid>
        </Paper>
        
        <Grid item xs={12} md={12} lg={6} className={classes.bgColorSection}>
          <Box
            boxShadow={2}
            bgcolor="background.paper"
            height="500px"
            pt={4}
          >
            <Box ml={4}>
              <Typography variant="h4" >Academic</Typography>
            </Box>  
            <Box
              m={2}
              ml={4}
            >
              {infoCV.Academic.map(item =>
                <Academic key={item.degree} {...item} />
              )}
            </Box>
          </Box>
        </Grid>  
         
        <Grid item xs={12} md={12} lg={6} className={classes.bgColorSection}>
          <Box
             boxShadow={2}
             bgcolor="background.paper"
             height="500px"
             pt={4}
             pl={1}
          >
          <Typography variant="h4" >Skills</Typography>
          <Box>
            {infoCV.skills.map(item =>
              <Skills key={item.name} {...item} />
            )}
          </Box>
          </Box>
        </Grid>  

        <Grid item xs={12} md={12} lg={6}>
          <Box
            boxShadow={2}
            bgcolor="background.paper"
            height="200px"
            pt={4}
            pl={2}
          >
            <Box 
            ml={2}
            >
              <Typography variant="h4" >Interests</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              {infoCV.interest.reduce((finalArray, name  ) => {
                  finalArray.push({name});
                  return finalArray
                }, []).map(item =>  
                  <Interest key={item.name} {...item} />)
                }
            </Box>
          </Box>
        </Grid>  

        <Grid item xs={12} md={12} lg={6}>
          <Box
              boxShadow={2}
              bgcolor="background.paper"
              height="200px"
              pt={4}
              pl={2}
          >
            <Typography variant="h4">Languages</Typography>
            <Box
              display="flex"
              justifyContent="space-around"  
            >
              {infoCV.languages.map(item =>
                <Languages key={item.name} {...item} />
              )}
            </Box>
          </Box>
        </Grid>  
      </Grid>
    </div>
  )
};

export default App;


