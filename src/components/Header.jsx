import React from 'react';

import SmartphoneIcon from '@material-ui/icons/Smartphone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';

import { Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: '3px', 
  }, 
  headerItems: {
    padding: '16px 0',
    spacing: 8,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      spacing: 0, 
      margin: 0, 
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      // marginLeft: '16px',
      marginLeft: '0',
      fontSize: "0.8rem", 
      margin: 0, 
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
     fontSize: "1.5rem"
    },
  },
  dataDescription: {
    [theme.breakpoints.down('sm')]: {
     fontSize: "0.8rem",
     margin: 0, 
    },
  }
}))

function Header({data, children}) {

  const classes = useStyles(); 
  
  return( 
    <header>
        <section className="Header">
          <Typography variant="h3" className={classes.title}>{data.name}</Typography>
          <p className={classes.dataDescription}>{data.profession}</p>
          <Box display="flex" mb={1} className={classes.headerItems}>
            <Box display="flex" alignItems="center" className={classes.item}><SmartphoneIcon className={classes.icon} /> <span className="Header-item">{data.phone}</span></Box> 
            <Box display="flex" alignItems="center" className={classes.item} ml={2}><EmailIcon className={classes.icon} /> <span className="Header-item">{data.email}</span></Box> 
            <Box display="flex" alignItems="center" className={classes.item} ml={2}><LanguageIcon className={classes.icon} /> <span className="Header-item">{data.website}</span></Box>
          </Box>
          <div>
            <span className={classes.dataDescription}>{data.address}</span>
          </div>
          <h3 className="About-title">About Me</h3>
          {children}
        </section>   
    </header> 
  )
}; 

export default Header; 