import React from "react";

const Profile = ({ description }) => {
    return (
        <div>
            <h2 className='Profile-title'>
                Profile
            </h2>
            <div className='Profile-desc'>
                <span>{description}</span>
            </div>
        </div>
    );
};

export default Profile;