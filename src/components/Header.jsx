import React from 'react';
import '../styles/components/Header.styl';

const Header = ({
  avatar,
}) => {

  return (
    <div className='header-avatar'>
      <img src={avatar} alt='Imagen avatar' />
    </div>
  );
};

export default Header;
