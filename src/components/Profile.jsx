import React from 'react';
import '../styles/components/Profile.css';

const Profile = ({ info }) => {

  return (
    <div className='profile'>
      <h1 className='Profile-title'>About Me: </h1>
      <p className='Profile-desc'>{info}</p>
    </div>
  );
};

export default Profile;
