import React from 'react';

const Profile = ({ userData }) => {
  return (
    <div>
      <div className='Profile-title'>
        Profile
      </div>
      <div className='Profile-desc'>
        {userData.Profile}
      </div>
    </div>
  );
};

export default Profile;
