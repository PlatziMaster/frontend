import React from 'react'

export default function Header({ children, name, avatar }) {
    return (
        <header>
            <img src={avatar}></img>
            <div>
                <h1 className="Header-title">{name}</h1>
                {children}
            </div>
        </header>
    )
}
