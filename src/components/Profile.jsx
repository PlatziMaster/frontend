import React from 'react';
import '../styles/components/Profile.css';
import PropTypes from 'prop-types';

const Profile = ({ description, title }) => (
  <div className='profile'>
    <h3 className='profile-title'>{title}</h3>
    <div className='profile-description'>
      <p>
        {description}
      </p>
    </div>
  </div>
);

Profile.propTypes = {
  description: PropTypes.string,
};

export default Profile;
