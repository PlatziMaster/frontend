import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Header.styl';

const Header = ({ children } = null) => (
  <>
    <h2 className='Header-title'> </h2>
    <section className='Header'>{children}</section>
  </>
);

Header.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Header;
