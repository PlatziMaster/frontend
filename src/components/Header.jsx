import React from 'react';
import '../styles/components/Header.css';

const Header = ( {children}) => (
    <header className="Header-title">{children}</header>
);
export default Header;