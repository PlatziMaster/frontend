import React from 'react';
import '../../assets/styles/components/Header.css';
const Header = ({ children, avatar }) => (
    <header className="Header-title">
        <img className="img" src={avatar} alt="img" />
    {children}
    </header>
);
export default Header;