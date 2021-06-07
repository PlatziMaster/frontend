import React from 'react';
import './styles/style.css';


class Profile extends React.Component {
    render() {
        return (
            <section className="profile">
                <h2>Perfil Profesional</h2>
                <p>
                    Ingeniero de Sistemas con capacidades de liderazgo y trabajo en equipo, responsable, honesto, dinámico y ético, con sentido social y humano, de fácil y buena aceptación en los grupos de trabajo, con la capacidad de integrar y/o dirigir equipos multidisciplinarios con el fin de integrar información proveniente de distintos campos, con mentalidad de continuo aprendizaje, con alto sentido de responsabilidad y compromiso, capaz de analizar y diseñar estrategias que permitan la implementación de soluciones tecnológicas para el mejoramiento de procesos de negocios en general.
                </p>
                <p>
                    Tengo amplio conocimiento y experiencia en el manejo de herramientas para la administración de datos, así como su integración para generar soluciones de inteligencia de negocios y analítica (on premise – cloud) que permitan obtener información útil y oportuna para la toma de decisiones dentro de la organización.
                </p>
            </section>
        )
    }
    
}

export default Profile;