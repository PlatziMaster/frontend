/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/components/App.styl';
import '../styles/components/Header.styl';

function Header({ data }) {
  console.log(data);
  return (
    <div className="category-container header-container">
      <div className="profile-image">profile image</div>
      <div className="contact-info">
        <h2>{name}</h2>
        <h3>.Header-job-title</h3>
        <div className="header-list">
          <ul>
            <li>.Header-phone</li>
            <li>.Header-email</li>
            <li>.Header-adress</li>
          </ul>
        </div>
        <h3>.Header-adress</h3>
      </div>
    </div>
  );
}

export default Header;
