import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({title, profession, profile}) => {
  return (
    <div className="card profile">
      <div>
        <h2 className="Profile-title">{title}</h2>
        <h2>{profession}</h2>
        <h3 className="Profile-desc">{profile}</h3>
      </div>
    </div>
  );
}

export default Profile;
