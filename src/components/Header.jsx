import React from 'react'
import '../styles/components/Header.css'


const Header = ({ children }) => {
    return (
        <header className="Header">
            <div className="Header-container">
                {children}
            </div>
        </header>
    )
}


export default Header