import React from 'react';
import '../../assets/styles/components/About.css'

const About = ({ data = {} }) => {
const { name, profession, phone, email, website, address } = data;
return (
<div className="About-title">
    <h2>{name}</h2>
    <ul>
        <li>{profession}</li>
            <ul className="About-item">
            <li>{phone}</li>
            <li>{email}</li>
            <li>{website}</li>
            </ul>
        <li>{address}</li>
    </ul>
</div>
);
};

export default About;