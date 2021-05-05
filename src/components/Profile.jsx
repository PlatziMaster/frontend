import React from 'react';

import '../styles/components/Profile.styl';

const Profile = ({ profileDesc }) => {
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <p>{profileDesc}</p>
    </div>
  );
};

export default Profile;
