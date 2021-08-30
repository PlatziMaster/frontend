import React from 'react';
import { makeStyles } from '@material-ui/styles';

import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  languagesContainer: {
    display: 'inline-block',
    margin: '20px'
  },
  progressB: {
    color: purple[800] 
  }, 
}))


function Languages({name, percentage}) {

  const classes = useStyles(); 

  const percentageSkill = parseInt({percentage});

  return( 
    <div className={classes.languagesContainer}>
        <h4>{name}</h4>
        <List>
          <ListItem>
            {percentage}
          </ListItem>
        </List>
        <span>
          <LinearProgress className={classes.progressB} variant="determinate" value={70} />
        </span>  
    </div>
  )
}; 

export default Languages; 