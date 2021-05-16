import React from 'react';

const Profile = ({ data = 'No Data' }) => {
  return (
    <div className='Profile'>
      <span className='title'>Profile</span>
      <p className='Profile-desc'>{data}</p>
    </div>
  );
};

export default Profile;
