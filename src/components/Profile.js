import React from 'react';
//import PropTypes from 'prop-types';

const Profile = ({ profile }) => {
  return (
    <div>
      <span className='Profile-title' />
      <span className='Profile-desc'>{ profile}</span>

    </div>
  );
};

Profile.propTypes = {

};

export default Profile;
