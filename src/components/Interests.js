import React from 'react'

import './styles/Interests.styl'

export default function Interests() {
    return (
        <div className="interests__container">
            <h4 className="title">Intereses</h4>
            <ul className="interests__info">
                <li>Aprender todos los días algo nuevo.</li>
                <li>Formarme como desarrollador web.</li>
                <li>Ciencias de datos</li>
                <li>Inteligencia Artificial y Machine Learning.</li>
                <li>Seguridad Informática.</li>
                <li>Leer.</li>
            </ul>
        </div>
    )
}
