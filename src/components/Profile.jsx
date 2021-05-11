import React from 'react';

const Profile = ({ data = '' }) => {
  return (
    <div className='Profile'>
      <span className='Profile-title'>Profile</span>
      <p className='Profile-desc'>{data}</p>
    </div>
  );
};

export default Profile;
