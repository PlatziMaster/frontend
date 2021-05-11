import React, { useContext } from 'react';
// Components
import Grid from '@material-ui/core/Grid';
// API
import AppContext from '../../../utils/context';
// Assets
import '../../../styles/components/App.styl';


function Resume(){

    const state = useContext(AppContext);
    
    return(
        <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
                <h1 className="experience_title">
                    ABOUT ME
                </h1> 
            </Grid>
            <Grid item xs={12} className="description_text">
                { state.data?.Profile }
            </Grid>
            <Grid item xs={12}>
                <img
                    src={'https://i.etsystatic.com/13213645/r/il/950d8f/1545133155/il_570xN.1545133155_iyol.jpg'}
                    style={{
                        width: '300px'
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Resume;