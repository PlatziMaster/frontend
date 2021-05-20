import React from 'react';
import About from './About';

const Header = ({dataUser}) => {

    return (
        <div className="header">
            <div className="container-img">
                <img src={dataUser.avatar}/>
            </div>
            <About {...dataUser}/>
        </div>
    );
}

export default Header;
