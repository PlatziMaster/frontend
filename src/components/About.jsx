import React from 'react';

const About = ({address, email, website, phone}) => {
    return(
    <div className = "About-container">
        <ul className='About-list'>
            <li className='About-item'><b>Address:</b> <br/> {address}</li>
            <li className='About-item'><b>Email:</b> <br/> {email}</li>
            <li className='About-item'><b>Website:</b> <br/> {website}</li>
            <li className='About-item'><b>Phone:</b> <br/> {phone}</li>
        </ul>
    </div>
    );
}

export default About