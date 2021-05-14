import React from 'react';

// import instagramIcon from '../assets/instagram-icon.svg';
// import twitterIcon from '../assets/twitter-icon.svg';
// import githubIcon  from '../assets/github-icon.svg';
// import facebookIcon  from '../assets/facebook-icon.svg';

import '../styles/components/Header.css';

const Header = () =>{
    return(
        <header className="Header">
            <img className="Header__img" src='https://arepa.s3.amazonaws.com/melissa.jpg' alt="" />
            <div className="Header__presentation">
                <div className="Header__presentation__main">
                    <h1 className="Header__title Header-title">Javier Saviñon</h1>
                    <span className="Header__job-title">Web Developer</span>
                    <span className="Header__address">Tabasco, Mexico</span>
                </div>
                <div className="Header__presentation__secundary">
                    <span className="Header__phone">9932415892</span>
                    <span className="Header__email">mengeroshi@outlook.com</span>
                    <span className="Header__website">mengeroshi.github.io/</span>
                </div>
            </div>
            {/* <div className="Header__social-networks">
                <a href={'#'}><img src={instagramIcon} alt="" className="Header__social-networks__icon" /></a>
                <a href={'#'}><img src={twitterIcon} alt="" className="Header__social-networks__icon" /></a>
                <a href={'#'}><img src={githubIcon} alt="" className="Header__social-networks__icon" /></a>
                <a href={'#'}><img src={facebookIcon} alt="" className="Header__social-networks__icon" /></a>
            </div> */}
        </header>
    )
};

export default Header;