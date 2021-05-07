import React from 'react';
import '../styles/components/Header.scss';

const Header = (avatar) => (
  <header className="header">
    <img className="header__img" src={avatar.avatar}  alt="Imagen de perfil" />
    <h1 className="header__title"> {avatar.name}  </h1>
    <div className="header__content">
      <ul>
        <li>Title: {avatar.profession}</li>
        <li>Phone: {avatar.phone}</li>
        <li>Address: {avatar.address}</li>
        <li>Email: {avatar.email}</li>
        <li>Website: {avatar.website}</li>

      </ul>
    </div>
  </header>
);

export default Header;