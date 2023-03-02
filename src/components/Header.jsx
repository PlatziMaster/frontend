import React from 'react';

const Header = ({ children }) => {
  return (
    <div>
      <h2 className='Header-title'>Header</h2>
      {children}
    </div>
  );
};

export default Header;
