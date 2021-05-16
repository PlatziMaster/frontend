import React from 'react'
import '../styles/components/Header.css'


const Header = ({children}) => {
    return (
        <header className="Header">
            {children}
        </header>
    )
}




export default Header