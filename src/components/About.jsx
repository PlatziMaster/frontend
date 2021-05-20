import React from 'react';
import Social from './Social';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,faAt,faUserCircle,faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';

const About = ({name, profession, address, email, website, phone, social}) => {
    return (
        <div className="container-about">
            <h3 className="About-title">{name}</h3>
            <span>{profession}</span>
            <div>
                <span><FontAwesomeIcon icon={faPhone}/>{phone}</span>
                <span><FontAwesomeIcon icon={faAt}/>{email}</span>
                <span><a target="__blank" href={website}><FontAwesomeIcon icon={faUserCircle}/>Portfolio</a></span>
            </div>
            <span><FontAwesomeIcon icon={faMapMarkedAlt}/>{address}</span>
            <div>
                {
                    social?.map(item => {
                        return <Social key={item} social={item}/>
                    })
                }                
            </div>
        </div>
    );
}

export default About;
