import React from 'react';

const Header = ({
  name = 'name',
  profession = 'profession',
  address = 'address',
  email = 'email',
  website = 'website',
  phone = 'phone',
  avatar = 'http://www.gravatar.com/avatar',
}) => {
  return (
    <header className='Header'>
      <img src={`${avatar}?s=200`} alt='this is me' />
      <h1 className='Header-title'>{name}</h1>
      <p className='Header-job-title'>{profession}</p>
      <ul className='Header-list'>
        <li className='Header-list-elem'>{phone}</li>
        <li className='Header-list-elem'>{email}</li>
        <li className='Header-list-elem'>{website}</li>
        <li className='Header-list-elem'>{address}</li>
      </ul>
    </header>
  );
};

export default Header;
