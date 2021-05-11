import React, { useContext } from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
// API
import AppContext from '../../../utils/context';
// CSS
import '../../../styles/components/App.styl';

function About(){

    const state = useContext(AppContext);
    console.log(state)

    const mediaClick = (type) => {

        let url = "";

        if(type === 1){
            url = `mailto:${state.data?.email}`
            window.location.href = url;
            return true;
        }

        if(type === 2){
            url = state.data?.social[0].url
        }

        if(type === 3){
            url = state.data?.social[2].url
        }

        if(type === 4){
            url = state.data?.social[1].url
        }

        window.open(url,'_blank');
        window.open(url);
    }

    return(
        <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
                <img src={state.data?.avatar} alt='Header-profile' className="avatar_image"/>
            </Grid>
            <Grid item xs={12}>
                <h2 className="name_title">
                    { state.data?.name.toUpperCase() }
                </h2>
                <br/>
                <h4 className="description">
                    { state.data?.profession }
                </h4>
            </Grid>
            <Grid item xs={12}>
                <MailIcon
                    className="media_icon"
                    onClick={ () => mediaClick(1) }
              />
                <TwitterIcon
                    className="media_icon"
                    onClick={ () => mediaClick(2) }
              />
                <LinkedInIcon
                    className="media_icon"
                    onClick={ () => mediaClick(3) }
              />
                <img
                    src={'https://static.platzi.com/media/blog/unnamed-8089fc33-6322-4bd3-85de-1da032257d4b.png'}
                    className="platzi_icon"
                    onClick={ () => mediaClick(4) }
              />
            </Grid>
        </Grid>
    );
}

export default About;