import React, { useContext } from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Smartphone';
import EmailIcon from '@material-ui/icons/Email';
import PinIcon from '@material-ui/icons/PinDrop';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// API
import AppContext from '../../../utils/context';
// Assets
import '../../../styles/components/App.styl';


function PersonalInfo(){

    const state = useContext(AppContext);

    // Make action depending by tipe
    const makeAction = (type) => {
        let url = "";

        if(type === 1){
            url = state.data?.phone;
            window.open(`tel:${url}`);
            return true;
        }

        if(type === 2){
            url = `mailto:${state.data?.email}`
            window.location.href = url;
            return true;
        }

        if(type === 3){
            url = "https://goo.gl/maps/urVpRawmS6SdbEh19";
            window.location.href = url;
            return true;
        }
    }
    
    return(
        <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
                <h1 className="experience_title">
                    PERSONAL INFORMATION
                </h1> 
            </Grid>
            <Grid item xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button onClick={() => makeAction(1)}>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={ state.data?.phone } />
                    </ListItem>
                    <ListItem button onClick={() => makeAction(2)}>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary={ state.data?.email } />
                    </ListItem>
                    <ListItem button onClick={() => makeAction(3)}>
                        <ListItemIcon>
                            <PinIcon />
                        </ListItemIcon>
                        <ListItemText primary={ state.data?.address } />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default PersonalInfo;