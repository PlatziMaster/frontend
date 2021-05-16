import React from 'react';
import '../styles/components/Header.styl';

const Header = ({
  name = 'name',
  profession = 'profession',
  avatar = 'avatar',
}) => {
  return (
    <header className='Header'>
          <img src={`${avatar}`} alt='' />
      <div>
      <h2 className='Header-title'>{name}</h2>
      <p className='Header-job-title'>{profession}</p>
        
      </div>
    </header>
  );
};

export default Header;
