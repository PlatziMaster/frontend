import React from 'react';
import '../index.css';
import data from '../data/data.json';

const Header = () => {
  const { name, profession, address, email, phone } = data.data;
  return (
    <header className='header-container'>
      <div className='header-left'>
        <img
          className='profile-img'
          src='../public/perfilPhoto.jpg'
          alt='Profile'
        />
      </div>
      <div className='header-right'>
        <h1 className='header-title'>{name}</h1>
        <h2 className='header-job-title'>{profession}</h2>
        <div className='header-contact'>
          <div className='header-item'>
            <span>{phone}</span>
          </div>
          <div className='header-item'>
            <span>{email}</span>
          </div>
          <div className='header-item'>
            <span>{address}</span>
          </div>
        </div>
      </div>
      <div className='header-social'>
        <a href={data.data.social[1].url}>
          <i className='fab fa-linkedin fa-lg'></i>
        </a>
        <a href={data.data.social[2].url}>
          <i className='fab fa-github fa-lg'></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
