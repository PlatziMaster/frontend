import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Header.styl';

const Header = ({ avatar, children, name }) => {
  return (
    <div className='Header'>
      <div className='Header__container'>
        <img src={avatar} alt={name} className='Header-img' />
        {children}
      </div>
    </div>
  );
};

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
