import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

import '../styles/components/Profile.styl';

const Profile = ({ profile }) => {
  return (
    <div className='Profile'>
      <Title name='Profile' />
      <p className='Profile-desc'>{profile}</p>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.string.isRequired,
};

export default Profile;
