import React from 'react';
import Languages from '../components/Languages';
import Social from '../components/Social';
import About from '../components/About';
import '../styles/main.css';

const Header = (props) => {
    return (
            <div className="profile-container">
            <div className="blue-arrow"></div>
            <About firstname={props.firstname} lastname={props.lastname} phone={props.phone} profession={props.profession} avatar={props.avatar} email={props.email} address={props.address} />
            <Social social={props.social}/>
            <Languages languages={props.languages}/>
            </div>
        )
    }

export default Header;