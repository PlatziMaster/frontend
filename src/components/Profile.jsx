import React from 'react';
import '../styles/components/Profile.css';

const Profile = ({ profile }) => {
  return (
    <div className='profile'>
      <div className='Profile-title'>Perfil</div>
      <div className='Profile-desc'>{profile}</div>
    </div>
  );
};

export default Profile;
