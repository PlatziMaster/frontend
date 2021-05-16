import React from 'react';

const Header = ({ children, avatar }) => {
  return (
    <header className="Header">
      <div className="Header-pic">
        <img src={avatar} alt="cv-photo" />
      </div>
      { children }
    </header>
  )
}

export default Header;
