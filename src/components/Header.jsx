/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-quotes */
import React from 'react';
import About from './About';
import '../styles/components/App.styl';
import '../styles/components/Header.styl';

function Header(props) {
  return (
    <div className="category-container header-container">
      <div className="profile-image">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="contact-info">
        <About props={props} />
      </div>
    </div>
  );
}

export default Header;
