import React from 'react'

import './styles/ProfessionalProfile.styl'

export default function Experience() {
    return (
        <div>
            <h3 className="professional-profile__subtitle">Experiencia</h3>
            <strong className="experience__title">Proyecto Innovador <br /></strong>
            <span className="experience__date">Neurona UDG  | Ene 2021 - May 2021</span>
            <p className="text">Desarrollamos un proyecto innovador utilizando las habilidades adquiridas a lo largo de la carrera.</p>
            <strong className="experience__title">Portafolio Personal <br /></strong>
            <span className="experience__date">Feb 2021 - Mar 2021</span>
            <p className="text">Creación de portafolio personal, en el que utilizo herramientas como HTML, CSS y JavaScript, Git y GitHub, Figma (Para el diseño y prototipado) y la terminal de linux.<a className="experience__link" href="https://brandonargel.github.io/"> brandonargel.github.io</a> En este portafolio encontrará todos los proyectos que he realizado a lo largo de mi carrera.</p>
        
        </div>
    )
}
