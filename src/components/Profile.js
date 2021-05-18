import React from 'react';
//import PropTypes from 'prop-types';

const Profile = ({ profile }) => {
  return (
    <div>
      <h4 className='Profile-title'>Descripción</h4>
      <span className='Profile-desc'>{profile}</span>
      <span className="Profile-item"></span>
      <span className="Profile-item"></span>
      <span className="Profile-item"></span>
    </div>
  );
};

Profile.propTypes = {

};

export default Profile;
