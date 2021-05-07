/* Componente AboutItem, en este se muestran los detalles
de cada item referente al componente PAdre  */

import React from 'react';
import '../styles/components/AboutItem.scss';

const AboutItem = (data) => (
    <div className="about-item">
        <div className="about-item__details">
            <p className="about-item__details--title">{data.name}:</p>
            <p>
                <a href={data.url}>conóceme, dale click</a>
            </p>
        </div>
    </div>
);

export default AboutItem;