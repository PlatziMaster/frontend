import React from 'react';
import Box from '../Box/Box';
import '../../styles/components/Header.styl';

const Header = () => {
  return (
    <Box className='Header'>
      <img className='Profile-image' src='public/avatar.jpg' alt='profile' />
      <div>
        <h1 className='Header-title'>.Header-title</h1>
        .Header-job-title
        <div className='Header-data'>
          <div className='Header-item'>
            .Header-phone
            <br />
            .Header-adress
          </div>
          <div className='Header-item'>
            .Header-email
          </div>
          <div className='Header-item'>
            .Header-website
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Header;
