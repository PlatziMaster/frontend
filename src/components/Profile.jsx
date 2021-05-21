import React from 'react';
import '../styles/components/Profile.styl';


const Profile = ({profile}) =>{

    return(
        <div className="box">
            <div className="information">
                <strong><h1>Profile</h1></strong>
                <p className="mt-3">{profile}</p>
            </div>
            
        </div>
    )
}

export default Profile;