import React from 'react';

const Skills = ({ name, percentage }) => (
    <div className="Skills-title">
        <h3 className="Skills-item">{`${name}, ${percentage}`}</h3>
    </div>
);

export default Skills;