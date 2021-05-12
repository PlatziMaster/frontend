import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/styles/components/Header.scss';
// import logo from '../assets/static/leftIcon.png';

const Header =()=> {
  return (
    <header className="header">
      <Link to="">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      
    </header>
  );
}
export default Header