import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Profile.styl';

const Profile = ({ profile = '' }) => (
  <section className='Profile'>
    <h2 className='Profile-title'>Profile</h2>
    <p className='Profile-desc'>{profile}</p>
  </section>
);

Profile.defaultProps = {
  profile: 'lorem impsum',
};

Profile.propTypes = {
  profile: PropTypes.string,
};

export default Profile;
