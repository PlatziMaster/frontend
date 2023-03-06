import React from 'react';
import '../index.css';
import data from '../data/data.json';

const Profile = () => {
  const { profile } = data.data;
  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <h2>Mi perfil</h2>
      </div>
      <div className='profile-body'>
        <p>
          {profile}
        </p>
      </div>
    </div>
  );
};

export default Profile;
