import React from 'react';

import Picture from '../assets/Picture.png';
import instagramIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import githubIcon  from '../assets/github-icon.svg';
import facebookIcon  from '../assets/facebook-icon.svg';



const Header = () =>{
    return(
        <header>
            <img className="Header__img" src={Picture} alt="" />
            <div className="Header__presentation">
                <div className="Header__presentation__main">
                    <title className="Header__title">Javier Saviñon</title>
                    <span className="Header__job-title">Web Developer</span>
                    <span className="Header__address">Tabasco, Mexico</span>
                </div>
                <div className="Header__presentation__secundary">
                    <span className="Header__phone">9932415892</span>
                    <span className="Header__email">mengeroshi@outlook.com</span>
                    <span className="Header__website">https://mengeroshi.github.io/</span>
                </div>
            </div>
            <div className="Header__social-networks">
                <a href={'#'}><img src={instagramIcon} alt="" className="Header__social-networks__icon" /></a>
                <a href={'#'}><img src={twitterIcon} alt="" className="Header__social-networks__icon" /></a>
                <a href={'#'}><img src={githubIcon} alt="" className="Header__social-networks__icon" /></a>
                <a href={'#'}><img src={facebookIcon} alt="" className="Header__social-networks__icon" /></a>
            </div>
        </header>
    )
};

export default Header;