import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ prof }) => {

  return (
    <div className='Profile-title'>
      <h4>- About Me</h4>
      <h2 className='Profile-desc'>{ prof }</h2>
    </div>
  );
};

export default Profile;
