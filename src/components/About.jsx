import React from 'react'
import '../styles/components/about.css'

const About = ({Title,Job,Phone,Email,Web,Address}) => {
    return (
        <div className="About_container">
            <h1>{Title}</h1>
            <p>{Job}</p>
            <div className="about_contact">
                    <p>{Phone}</p>
                    <p>{Email}</p>
                    <p>{Web}</p>
            </div>
            <p>{Address}</p>

        </div>
    )
}

export default About
