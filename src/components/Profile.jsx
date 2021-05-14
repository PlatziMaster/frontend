import React from 'react';

const Profile = ({profile}) => {
    return(
        <div >
            
                <h1 className='Profile-title'>Profile</h1>
                <p className='Profile-desc'>{profile}</p>
            
        </div>
    );
}

export default Profile