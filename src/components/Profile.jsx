import React from "react";

const Profile = ({ data }) => {
    return (
        <div className='nes-container is-dark with-title'>
            <h2>Perfil</h2>
            <p>{data.Profile}</p>
        </div>
    );

};

export default Profile;