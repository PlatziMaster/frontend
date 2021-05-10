import React from 'react';

import '../styles/components/Profile.css';

const Profile = ({ data }) => {

  const { Profile, profession } = data || [];
  return (
    <div className='Profile-title'>
      <h1>{profession}</h1>
      <p className='Profile-desc'>{Profile}</p>
    </div>
  );
};

export default Profile;
