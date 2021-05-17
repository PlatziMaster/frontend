import React from 'react';
import '../../assets/styles/components/Profile.css'
const Profile = ({ date, description, institution, name }) => (
    <div className="Profile-title">
    <div className="Profile-desc" >
    <h3>{name}</h3>
    <p>{description}</p>
        <div className="certificate__info">
        <h4>{institution}</h4>
        <p>{date}</p>
        </div>
    </div>
    </div>
);

export default Profile