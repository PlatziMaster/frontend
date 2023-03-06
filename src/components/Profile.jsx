import React from 'react';

const Profile = ({ profile = '' }) => {
  return (
    <div className='section two-cols'>
      <div className='title-section'>
        <h2 className='Profile-title'>Perfil</h2>
      </div>
      <div className='desc-section'>
        <p className='Profile-desc'>{profile}</p>
      </div>
    </div>
  );
};

export default Profile;
