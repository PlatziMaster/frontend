import React, { useContext } from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// API
import AppContext from '../../../utils/context';
// Assets
import '../../../styles/components/App.styl';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

function Intersts(){

    const state = useContext(AppContext);
    const classes = useStyles();
    
    return(
        <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
                <h1 className="experience_title">
                    INTERESTS
                </h1> 
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3} direction="column" alignItems="center">
                {
                    state.data?.interests.map((interest) => {
                        return(
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={interest.image}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {interest.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {interest.description}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })
                }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Intersts;