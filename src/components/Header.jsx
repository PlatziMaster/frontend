import React from 'react';


import '../styles/components/Header.css';

const Header = ({name, profession, address,email, website, phone, avatar}) =>{
    return(
        <header className="Header">
            <img className="Header__img" src={avatar} alt="" />
            <div className="Header__presentation">
                <div className="Header__presentation__main">
                    <h1 className="Header__title Header-title">{name}</h1>
                    <span className="Header__job-title">{profession}</span>
                    <span className="Header__address">{address}</span>
                </div>
                <div className="Header__presentation__secundary">
                    <span className="Header__phone">{phone}</span>
                    <span className="Header__email">{email}</span>
                    <span className="Header__website">{website}</span>
                </div>
            </div>
        </header>
    )
};

export default Header;