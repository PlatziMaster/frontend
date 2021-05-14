import React from 'react';

const Header = ({ name, profession, avatar}) => {

return(
        <div className = "Header">
            <img className = "Header-photo" src={avatar} alt="This is me" />
            <div className = "Header-text">
                <h1 className='Header-title'>{name}</h1>
                <h2 className='Header-job-title'>{profession}</h2>
            </div>
        </div>
    );
}

export default Header