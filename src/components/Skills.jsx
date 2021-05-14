import React from 'react';

const Skills = ({ data = [] }) => {
  return (
    <div className="Card">
      <h1 className="Skills-title">Skills</h1>
      <ul className="Percentage-list">
        {data.map(skill => (
          <li key={data.indexOf(skill)} className="Skills-item">
            <span>{skill.name}</span>
            <span>{skill.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
