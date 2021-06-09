import React from 'react';
import Social from './Social';

const Header = ({ avatar, name, profession, children, social }) => (
  <header className='Header'>

    <div className='Header-title'>
      <img src={avatar} alt='Profile' />
      <div>
        <h2>{name}</h2>
        <h3>{profession}</h3>
      </div>
    </div>

    {children}

    <Social social={social} />
  </header>
);

export default Header;
