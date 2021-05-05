import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <>
      <div className="Header">
        <img style={{ width: '100px' }} />
        <div className="Header--items">
          <h2>.Header Title</h2>
          <h3>.Header-job.title</h3>
          <div className="Header--items--contact">
            <h3>.Header-phone</h3>
            <h3>.Header-email</h3>
            <h3>.Header-website</h3>
          </div>
          <h3>.Header-address</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
