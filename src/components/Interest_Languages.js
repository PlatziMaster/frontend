import React from 'react';
import './styles/style.css';


class Interest_Languages extends React.Component {
    render() {
        return (
            <section className="interest_languages">
                <section className="interest_languages_interest">
                    <h2>Intereses</h2>
                    <ul>
                        <li>Analítica de datos</li>
                        <li>Data science</li>
                        <li>Inteligencia artificacial</li>
                        <li>Desarrollo web (Frontend y Backend)</li>
                        <li>Diseño UI - UX</li>           
                    </ul>
                </section>
                <section className="interest_languages_languages">
                    <h2>Idiomas</h2>
                    <ul>
                        <li>Español</li>
                        <li>Inglés B2 Level</li>       
                    </ul>
                </section>
            </section>
        )
    }
    
}

export default Interest_Languages;