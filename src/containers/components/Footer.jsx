import React from 'react';
import '../../assets/styles/components/Footer.css'

const Footer = ({ children, title }) => (
    <footer className="footer">
        <h3 className="footer__title">{title}</h3>
            {children}
    </footer>
);

export default Footer;