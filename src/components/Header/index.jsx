import React from 'react';
import Box from '../Box/Box';
import '../../styles/components/Header.styl';

const Header = ({ data }) => {
  const { name, avatar, profession, phone, address, email, website } = data;
  return (
    <Box className='Header'>
      <img className='Profile-image' src={avatar} alt='profile' />
      <div>
        <h1 className='Header-title'>{name}</h1>
        {profession}
        <div className='Header-data'>
          <div className='Header-item'>
            {phone}
            <br />
            {address}
          </div>
          <div className='Header-item'>
            {email}
          </div>
          <div className='Header-item'>
            {website}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Header;
