import React from 'react';
import '../styles/components/Header.css';

const Header = ({ avatar, name, job_title, children }) => {
  return (
    <div className='header'>
      <div className='user-image'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='header-derecha'>
        <h1 className='Header-title'>{name}</h1>
        <h3 className='Header-job-title'>{job_title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Header;
