import React from 'react';
import '../styles/layout/Layout.styl';

const Layout = ({ children }) => {
  return (
    <div className='Layout-container'>
      {children}
    </div>
  );
};

export default Layout;
