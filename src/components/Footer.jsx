import React from 'react';
import Social from './Social'

const Footer = ({ social }) => {
    return (
        <footer className="Footer">
            <p >Happy of complete this challlenge 😄</p>
            <Social social={social}/>
        </footer>
    )
}


export default Footer