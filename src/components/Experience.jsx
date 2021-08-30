import React from 'react';
import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ImageIcon from '@material-ui/icons/Image';

import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  experienceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, 
  experience: {
    display: 'flex', 
    alignItems: 'center',
  },
  icon: {
    margin: '10px', 
    color: purple[800] 
  }, 
}))

function Experience({ company, endDate, jobDescription, jobTitle, startDate }) {
  
  const classes = useStyles(); 

  return( 
    <section className="Experience">
      <Box className={classes.experienceContainer}>
        <Box className={classes.experience}>
          <Typography variant="h6" className="Experience-title" m={1}>{jobTitle}</Typography>
          {jobTitle === "Backend" ? <SettingsApplicationsIcon className={classes.icon}></SettingsApplicationsIcon> : <ImageIcon color="primary" className={classes.icon}></ImageIcon> }
        </Box>
        <Box mr={10}>
          <Typography variant="body1" className="Experience-item" display="inline">{startDate} - </Typography>
          <Typography variant="body1" className="Experience-item" display="inline">{endDate}</Typography>
        </Box>  
      </Box>
      <Box mb={1}>
        {company}
      </Box>  
      <Box fontWeight="fontWeightLight">
        {jobDescription}
      </Box>  
    </section>
  )
}; 

export default Experience; 