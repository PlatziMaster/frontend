import React from 'react';
//import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <span className='Header-title' />
      <span className='Header-job-title' />
      <span className='Header-phone' />
      <span className='Header-email' />
      <span className='Header-website' />
      <span className='Header-adress' />
    </div>
  );
};

Header.propTypes = {

};

export default Header;
