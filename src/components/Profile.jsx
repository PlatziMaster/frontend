import React from 'react';

const Profile = ({ profile }) => {
  return (
    <div className='wrapper'>
      <h3>Profile</h3>
      <p className='paragraph'>{profile?.paragraph1}</p>
      <p className='paragraph'>{profile?.paragraph2}</p>
      <p className='paragraph'>{profile?.paragraph3}</p>
    </div>
  );
};

export default Profile;
