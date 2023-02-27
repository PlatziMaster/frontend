import React from 'react';
import About from '../components/About';

export default function Header({ name, profession, address, email, avatar }) {
  return (
    <div className='header-container'>
      <div className='header-item-image'>
        <img className="avatar" src={avatar} />
      </div>
      <div className='Header-title'>
        <About
          name={name}
          profession={profession}
          address={address}
          email={email}
        />
      </div>
    </div>
  );
}

