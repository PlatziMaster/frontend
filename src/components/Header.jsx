import React from 'react';
import '../styles/components/Header.css';

const Header = ({ avatar, name, job_title, children }) => {
  return (
    <div className='header'>
      <img src={avatar} alt='avatar' />
      <h1 className='Header-title'>{name}</h1>
      <h2 className='Header-job-title'>{job_title}</h2>

      {children}
    </div>
  );
};

export default Header;
