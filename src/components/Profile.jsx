import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({
  profile,
}) => {

  return (
    <div className='profile'>
      <h2 className='profile-title'>Objetivo</h2>
      <p className='profile-desc'>{profile}</p>
    </div>
  );
};

export default Profile;
