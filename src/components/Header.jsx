import React from 'react';
import '../styles/components/Header.styl';

const Header = ({
  name = 'name',
  profession = 'profession',
  avatar = 'avatar',
}) => {
  return (
    <header className='Header'>
      <div>
        <h1 className='Header-title'>{name}</h1>
        <p className='Header-job-title'>{profession}</p>
      </div>
      <img src={`https://www.gravatar.com/avatar/${avatar}?s=200`} alt='this is me' />
    </header>
  );
};

export default Header;
