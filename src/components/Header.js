import React from 'react';
import '../styles/components/Header.css';

const Header = ({ avatar, children }) => {

  return (
    <div className='Header-title'>
      <div className='Header-image'>
        <img src={avatar} alt='profilePhoto' />
      </div>
      {children}
    </div>
  );
};

export default Header;
