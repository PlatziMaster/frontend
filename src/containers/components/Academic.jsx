import React from 'react';

const Academic = ({ degree, description, endDate, institution, startDate }) => (
    <div className="Academic-title">
            <h3 className="Academic-item">{`${degree}, ${institution}`}</h3>
            <p>{description}</p>
            <p>{`${startDate}, ${endDate}`}</p>
    </div>
);

export default Academic;