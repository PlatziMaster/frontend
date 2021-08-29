import React from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  academicContainer: {
    width: '100%', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  sectionClass: {
    margin: '5% 0',
  }
}))

function Academic({degree, description, institution, startDate, endDate}) {

  const classes = useStyles(); 

  return( 
    <section className={classes.sectionClass}>
      <Box className={classes.academicContainer}>
        <Typography variant="h6">{degree}</Typography>
        <Box mr={7}>
          <Typography variant="body1" className="Experience-item" display="inline">{startDate} - </Typography>
          <Typography variant="body1" className="Experience-item" display="inline">{endDate}</Typography>
        </Box>  
      </Box>
      <Box my={2}>
        <Box mb={1}>
          {institution}
        </Box>
        <Box fontWeight="fontWeightLight">
          {description}
        </Box>
      </Box>
    </section>
   
  )
}; 

export default Academic; 