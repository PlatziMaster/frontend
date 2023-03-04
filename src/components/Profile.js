import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ profile = 'No Data' }) => {
  return (
    <div className='Profile'>
      <span className='Profile-title'>PROFILE</span>
      <div className='short-line'>_</div>
      <p className='Profile-desc'>{profile}</p>
    </div>
  );
};

export default Profile;
