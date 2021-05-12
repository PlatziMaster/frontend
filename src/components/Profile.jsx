import React from 'react';

const Profile = ({ data = '' }) => {
  return (
    <div className='Profile'>
      <span className='title'>PROFILE</span>
      <div className='short-line'>_</div>
      <p className='Profile-desc'>{data}</p>
    </div>
  );
};

export default Profile;
