import React, { useContext } from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Smartphone';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/School';
import RepeatIcon from '@material-ui/icons/EmojiEmotions';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// API
import AppContext from '../../../utils/context';
// Assets
import '../../../styles/components/App.styl';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    }
}));

function About(){

    const state = useContext(AppContext);
    const classes = useStyles();

    return(
        <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <h1 className="experience_title">
                EXPERIENCE &amp; ACADEMIC
              </h1> 
            </Grid>
            <Grid item xs={false} md={2}/>
            <Grid item xs={12} md={8}>
            <Timeline align="alternate">
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      {`${state.data?.experience[0].startDate} - ${state.data?.experience[0].endDate}`}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                      {`${state.data?.experience[0].jobTitle}`}
                      </Typography>
                      <Typography>{`${state.data?.experience[0].company}`}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      {`${state.data?.experience[1].startDate}`}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                      {`${state.data?.experience[1].jobTitle}`}
                      </Typography>
                      <Typography>{`${state.data?.experience[1].company}`}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                      {`${state.data?.experience[2].company}`}
                      </Typography>
                      <Typography>{`${state.data?.experience[2].jobTitle}`}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                      {`${state.data?.experience[3].company}`}
                      </Typography>
                      <Typography>{`${state.data?.experience[3].jobTitle}`}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
            <Grid item xs={false} md={2}/>
        </Grid>
    );
}

export default About;