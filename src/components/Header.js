import React from 'react';
//import PropTypes from 'prop-types';

const Header = ({ name, phone, profession, email, weebsite, adress }) => {
  return (
    <div>
      <span className='Header-title'>{name}</span>
      <span className='Header-job-title'>{phone}</span>
      <span className='Header-phone'>{profession}</span>
      <span className='Header-email'>{email}</span>
      <span className='Header-website'>{weebsite}</span>
      <span className='Header-adress'>{adress}</span>
    </div>
  );
};

Header.propTypes = {

};

export default Header;
