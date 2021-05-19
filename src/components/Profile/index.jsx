import React from 'react';
import Box from '../Box/Box';

const Profile = ({ data }) => {
  return (
    <Box>
      <h1 className='Profile-title'>
        Profile
      </h1>
      <div className='Profile-desc'>
        {data}
      </div>
    </Box>
  );
};

export default Profile;
