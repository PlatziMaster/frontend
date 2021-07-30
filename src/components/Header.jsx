import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ avatar, name, children }) => {

  return (
    <div className='Base-container'>
      <div className='Header-container'>
        <figure className='Header-pic'>
          <img src={avatar} alt="Mariana's avatar" />
        </figure>
        <div className='Header-name'>
          <h1 className='Header-title'>{name}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Header;
