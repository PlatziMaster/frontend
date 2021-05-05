import React from 'react';

import '../styles/components/Profile.styl';

const Profile = ({ profileDesc }) => {
  return (
    <div className="Profile">
      <h1 className="Profile-title">Profile</h1>
      <p className="Profile-desc">{profileDesc}</p>
    </div>
  );
};

export default Profile;
