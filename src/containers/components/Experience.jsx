import React from 'react';

const Experience = ({ company, endDate, jobDescription, jobTitle, startDate }) => (
    <div className="Experience-title">
            <h3 className="Experience-item">{`${jobTitle}, ${company}`}</h3>
            <p>{jobDescription}</p>
            <p>{`${startDate}, ${endDate}`}</p>
    </div>

);

export default Experience;