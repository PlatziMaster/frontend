import React from 'react';
import '../styles/components/Header.styl'

const Header = ({ name, avatar, profession, children }) =>  {
  return (
    <header className='header'>
      <div className='header-content'>
        <figure>
          <img className='header-img' src={avatar} alt='avatar' />
        </figure>
        <div>
          <h2 className='header-title'>{profession}</h2>
          <h3 className='header-name'>{name}</h3>
        </div>
      </div>
      {children}
    </header>
  )
}

export default Header