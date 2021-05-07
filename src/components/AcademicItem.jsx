/* Componente AboutItem, en este se muestran los detalles
de cada item referente al componente PAdre  */

import React from 'react';
import '../styles/components/AcademicItem.scss';

const AcademicItem = (data) => (
    <div className="academic-item">
        <div className="academic-item__details">
            <p className="academic-item__details--title">Graduate at {data.institution}</p>
            <ul className="academic-item__details--list">
                <li>Degree:{data.degree}</li>
                <li>StartDate:{data.startDate}</li>
                <li>EndDate:{data.endDate}</li>
                <li>Institution:{data.institution}</li>
            </ul>
            <p>Description:{data.description}</p>
        </div>
    </div>
);

export default AcademicItem;