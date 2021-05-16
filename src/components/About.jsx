import React from 'react'
import '../styles/components/About.css'


const About = ({ personalInfo }) => {
    return (
        <>
        <figure className="Header-image">
            <img src={personalInfo.avatar} alt="" />
        </figure>
        <section className="Header-information">
            <h1 className="Header-title">{personalInfo.name}</h1>
            <p className="Header-job-title">{personalInfo.profession}</p>
            <article >
                <p className="Header-phone"><strong>Phone:</strong> {personalInfo.phone}</p>
                <p className="Header-email"><strong>Email:</strong> {personalInfo.email}</p>
                <p className="Header-website"><strong>Website:</strong> {personalInfo.website}</p>
                <p className="Header-adress"><strong>Adress:</strong> {personalInfo.address}</p>
            </article>
        </section>
        </>
    )
}


export default About