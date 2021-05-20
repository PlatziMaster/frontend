import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';

const Profile = ({dataUser}) => {

    const {Profile} = dataUser;

    return (
        <div className="profile">            
            <h3 className="Profile-title"><FontAwesomeIcon icon={faUserTie}/> Profile</h3>
            <span className="Profile-desc">{Profile}</span>
        </div>
    );
}

export default Profile;
