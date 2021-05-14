import React from 'react'
import '../styles/components/About.css'


const About = () => {
    return (
        <div className="Header-container">
        <figure className="Header-image">
            <div>foto</div>
        </figure>
        <section className="Header-Information">
            <h1 className="Header-title">SERGIO SANHUEZA</h1>
            <p className="Header-job-title">Frontend Developer</p>
            <article >
                <p className="Header-phone">Phone: +569 35805401</p>
                <p className="Header-email">sergio.sergio.98@hotmail.com</p>
                <p className="Header-website">https://github.com/jito-jito</p>
                <p className="Header-adress">Santiago, Chile</p>
            </article>
        </section>
        </div>
    )
}





export default About