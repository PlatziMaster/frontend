// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const UserLogo = ({ logo }) => (
  <div className='logo'>
    <a href='/'><img className='logoimage' src={logo} alt='jesuskata icon' /></a>
  </div>
);

UserLogo.propTypes = {
  logo: PropTypes.string,
};
