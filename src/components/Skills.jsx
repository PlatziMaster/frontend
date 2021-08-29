import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  progressB: {
    color: purple[800] 
  }, 
  skillsTitle: {
    margin: '2% 0 0 5%',
    marginLeft: '5%',
    width: '50%'
  },
  skillsPercentage: {
    marginLeft: '5%',
    width: '50%',
    marginTop: '2%'
  }
}))

function Skills({ name, percentage }) {
  
  const classes = useStyles(); 
 
  const percentageSkill = parseInt({percentage});
 
  return( 
    <Box className="SkillsContainer"> 
      <Box display="flex" m={3}><span className={classes.skillsTitle}>{name}</span>
      {{percentage} !== null 
        ? <CircularProgress className={classes.progressB} value={percentage} variant="determinate">{percentageSkill}</CircularProgress> 
        : <CircularProgress variant="static"/> }
      <span className={classes.skillsPercentage}>{percentage}%</span></Box>
    </Box>
  )
}; 

export default Skills; 