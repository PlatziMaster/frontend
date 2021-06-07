import React from 'react';
import './styles/style.css';


class Academic_Skills extends React.Component {
    render() {
        return (
            <section className="academic_skills">
                <section className="academic_skills__academic">
                    <h2>Formación</h2>
                    <ul>
                        <li>MBA en Administración y Dirección de Empresas, Universidad Internacional Isabel I de Castilla, Octubre 2020</li>
                        <li>Máster en Big Data y Business Intelligence, Universidad Internacional Isabel I de Castilla, Mayo 2020</li>
                        <li>Especialización en coaching y PNL, Universidad Internacional Isabel I de Castilla, Mayo 2020</li>
                        <li>Ingeniería de Sistemas con Énfasis en Telecomunicaciones, Universidad Cooperativa de Colombia, Septiembre de 2004.</li>            
                    </ul>
                </section>
                <section className="academic_skills__skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>Sql Server</li>
                        <li>SSAS -  SSIS - SSRS</li>
                        <li>Power BI -  Tableau</li>
                        <li>Python Beginner</li>
                        <li>Javascript y React Beginner</li>          
                    </ul>
                </section>
            </section>
        )
    }
    
}

export default Academic_Skills;