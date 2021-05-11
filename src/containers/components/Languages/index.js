import React, { useContext } from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
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
    inline: {
      display: 'inline',
    },
}));

function Languages(){

    const state = useContext(AppContext);
    const classes = useStyles();
    
    return(
        <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
                <h1 className="experience_title">
                    LANGUAGES
                </h1> 
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={false} md={1}/>
                    <Grid item xs={12} md={10}>
                        <List className={classes.root}>
                            {
                                state.data?.languages.map((language) => {
                                    return(
                                        <div style={{ width: '100%' }}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" src={language.image} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                primary={language.name}
                                                secondary={
                                                    <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        Level -
                                                    </Typography>
                                                    {` ${language.percentage}`}
                                                    </React.Fragment>
                                                }
                                            />
                                            </ListItem>
                                            <Divider variant="inset" component="li" />
                                        </div>
                                    );
                                })
                            }
                        </List>
                    </Grid>
                    <Grid item xs={false} md={1}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Languages;