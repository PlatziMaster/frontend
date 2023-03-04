import React from 'react';

const Header = ({ children }) => {
  return (
    <div className='row Header-title mt-2'>
      {children}
    </div>
  );
};

export default Header;
