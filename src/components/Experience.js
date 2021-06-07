import React from 'react';
import './styles/style.css';


class Experience extends React.Component {
    render() {
        return (
            <section className="experience">
                <h2>Experiencia</h2>
                <div className="experience_list">
                    <div className="experience_list__detail">
                        <ul>
                            <li><h3>Empresa: SAMTEL CONSULTORES COLOMBIA</h3></li>
                            <li>Área: Consultoría TI</li>
                            <li> Fecha: Bogotá, Octubre 21 de 2019 – Actualmente</li>
                            <li>Cargo: Consultor BI</li>
                            <li>Funciones: Prestar los servicios de consultoría como desarrollador de 	soluciones BI (on premise – cloud), sector seguros.</li>                    
                        </ul>
                    </div>
                    <div className="experience_list__detail">
                        <ul>
                            <li><h3>Empresa: BUSINESS INSIGHTS S.A.S.</h3></li>
                            <li>Área: Proyectos TI</li>
                            <li>Fecha: Bogotá, Agosto 01 de 2016 – Octubre 18 de 2019</li>
                            <li>Cargo: Consultor BI</li>
                            <li>Funciones: 	Prestar los servicios de consultoría en las diferentes etapas de los proyectos BI, así como el diseño, implementación y administración de bases de datos y bodegas de Datos.</li>                    
                        </ul>
                    </div>
                    <div className="experience_list__detail">
                        <ul>
                            <li><h3>Empresa: G&M CONSTRUCCIONES S.A.</h3></li>
                            <li>Área: Sistemas</li>
                            <li>Fecha: Bucaramanga, Enero 07 de 2014 – Julio 31 de 2016</li>
                            <li>Cargo: Director de Sistemas</li>
                            <li>Funciones: Administración y mejoramiento de la plataforma tecnológica y de información.</li>                    
                        </ul>
                    </div>
                    <div className="experience_list__detail">
                        <ul>
                            <li><h3>Empresa: CONSORCIO SAYP 2011</h3></li>
                            <li>Área: Dirección de Enlace</li>
                            <li>Fecha: Bogotá, Agosto 07 de 2013 – Diciembre 30 de 2013</li>
                            <li>Cargo: Profesional Auditor de la Base de Datos Única de Afiliados</li>
                            <li>Funciones: 	Revisar bajo los criterios generales que defina el Ministerio de Salud y Protección Social e implementar mecanismos de control y seguimiento a la información cargada en la BDUA.</li>                    
                        </ul>
                    </div>
                </div>
            </section>
        )
    }    
}

export default Experience;