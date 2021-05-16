import React from 'react';

const Profile = ({ profile }) => {
  return (
    <>
      <div className='Profile-title'>Perfil</div>
      <div className='Profile-desc'>{profile}</div>
    </>
  );
};

export default Profile;
