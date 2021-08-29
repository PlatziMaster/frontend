import React from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';

import { Button } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import { Icon } from '@material-ui/core';

import { loadCSS } from 'fg-loadcss';

import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';
import github from '../assets/images/github.png'; 
import twitter from '../assets/images/twitter.png';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  aboutItem: {
    margin: '20px',
    opacity: '0.7',
    width: '25px',
    '&:hover': {
      transform: "scale(1.2)", 
      color: 'blue',
    },
    [theme.breakpoints.down('sm')]: {
      width: '10px', 
      fontSize:"small"
    },
  },
  iconSocial: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px', 
    },
  },
  aboutContainer: {
    display: 'inline-block',
  },
}))

function About({url, name}) {

  const classes = useStyles(); 

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return( 
    <section className={classes.aboutContainer}>
      <Tooltip title={`View ${name}`}arrow>
        <Button className={classes.aboutItem} href={url}>
          <Icon className={`fab fa-${name} ${classes.iconSocial}`}/>
        </Button>
      </Tooltip>
    </section>    
  )
}; 

export default About; 