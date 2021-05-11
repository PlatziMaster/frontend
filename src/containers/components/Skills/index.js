import React, { useContext } from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import FaceIcon from '@material-ui/icons/Face';
import ChatIcon from '@material-ui/icons/ChatBubble';
import PeopleIcon from '@material-ui/icons/SupervisorAccount';
import ComputerIcon from '@material-ui/icons/Computer';
import PhoneIcon from '@material-ui/icons/Smartphone';
import { makeStyles } from '@material-ui/core/styles';
// API
import AppContext from '../../../utils/context';
// Assets
import '../../../styles/components/App.styl';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

function Skills(){

    const state = useContext(AppContext);
    const classes = useStyles();

    // Get icon by type
    const getIcon = (icon) => {
        switch(icon){
            case 'face':
                return <FaceIcon/>
                break;
            case 'people':
                return <PeopleIcon/>
                break;
            case 'speak':
                return <ChatIcon/>
                break;
            case 'web':
                return <ComputerIcon/>
                break;
            case 'mobile':
                return <PhoneIcon/>
                break;
            default:
                return <></>
                break;
        }
    }

    return(
        <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
                <h1 className="experience_title">
                    SKILLS
                </h1> 
            </Grid>
            <Grid item xs={false} md={1}/>
            <Grid item xs={12} md={10}>
                <List component="nav" className={classes.root} aria-label="contacts">
                    {
                        state.data?.skills.map((skill, index) => {
                            return(
                                <div style={{width: '100%'}} key={index}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            { getIcon(skill.icon) }
                                        </ListItemIcon>
                                        <ListItemText primary={`${skill.name} ${skill.percentage}`} />
                                    </ListItem>
                                    <Divider />
                                </div>
                            );
                        })
                    }
                </List>
            </Grid>
            <Grid item xs={false} md={1}/>
        </Grid>
    );
}

export default Skills;