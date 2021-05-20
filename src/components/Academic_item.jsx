import React from 'react';

const Academic_item = ({academic}) => {

    const {degree, institution, description, startDate, endDate } = academic;

    return (
        <div className="academic-item">
            <h3>{institution}</h3>
            <h4>{degree}</h4> 
            <span>{description}</span>
            <span>{startDate}</span>
            <span>{endDate}</span>           
        </div>
    );
}

export default Academic_item;
