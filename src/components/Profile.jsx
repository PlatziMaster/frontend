import React from 'react';

const Profile = ({ prof }) => {

  return (
    <div className='profile__info'>
      <h4>- About Me</h4>
      <h2>{ prof }</h2>
    </div>
  );
};

export default Profile;
