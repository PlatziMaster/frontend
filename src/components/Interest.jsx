import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { loadCSS } from 'fg-loadcss';
import { Icon, Typography } from '@material-ui/core';


import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  interestContainer: {
    flexBasis:"50%"
  },
  interestItem: {
    margin: "5px",
    marginRight: "10px",
    textTransform: 'capitalize', 
    '&:first-letter': {
      color: purple[900],
      fontSize: '1.5rem'
    }
  }
}))

function Interest({name}) {

  const classes = useStyles(); 

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return( 
    <List className={classes.interestContainer}>
      <ListItem className={classes.liStyle}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <Typography variant={"body1"} className={classes.interestItem}>{name}</Typography> 
        <Icon style={{ color: purple[800] }} className={`fas fa-${name}`}/>
      </ListItem>
    </List>
  )
}; 

export default Interest; 