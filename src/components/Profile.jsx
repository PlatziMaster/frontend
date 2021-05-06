import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ description }) => {
  return (
    <section className="Profile Container">
      <h2 className="Profile-title">Description</h2>
      <p className="Profile-desc">{description}</p>
    </section>
  );
};

Profile.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Profile;
