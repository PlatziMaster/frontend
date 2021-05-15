import React from 'react'
import '../styles/components/header.css'

const Header = ({children}) => {
    return (
        <div className="header_container">
            <div className="header_profile">x</div>
            {children}
        </div>
    )
}

export default Header

