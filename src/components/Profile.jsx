import React from 'react';
import '../styles/components/Profile.css';

import Tile from './Tile';


const Profile = ({profile})=>{
    return(
        <Tile
        title="About Me"
        color="blue"
        align="left"
        >
            <p className="Profile__text Profile-desc">
                {profile}
            </p>
        </Tile>
    )
}

export default Profile