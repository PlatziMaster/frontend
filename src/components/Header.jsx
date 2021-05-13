import React from 'react'
import '../styles/components/Header.styl'

const Header = ({ name, avatar, profession, children }) => {
  return(
    <header className='Header Card'>
      <div className='Header-container'>
        <img src={ avatar } alt='profile image' />
        <div>
          <h3>{profession}</h3>
          <h1 className='Header-title Card--title'>{ name }</h1>
        </div>
      </div>
      { children }

    </header>
  )
}

export default Header