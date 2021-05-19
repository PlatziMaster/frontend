import React from 'react';

const Experience_item = ({experience}) => {

    const {company, endDate, jobDescription, jobTitle, startDate} = experience;

    return (
        <div className="experience-item">
            <h3>{jobTitle}</h3>
            <span>{company}</span>
            <p>{jobDescription}</p>
            <p>{endDate}</p>
            <p>{startDate}</p>
        </div>
    );
}

export default Experience_item;
