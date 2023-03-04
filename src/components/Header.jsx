import React from 'react';

const Header = ({ children }) => {
  return (
    <div className='row Header-title'>
      {children}
    </div>
  );
};

export default Header;
