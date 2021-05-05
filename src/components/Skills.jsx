import React from 'react';

import '../styles/components/Skills.styl';
const Skills = ({ Skills = [] }) => {
  return (
    <div className="Skills">
      <h1 className="Skills-title">Skills</h1>

      {Skills.map(item => (
        <div className="Skills--container--items">
          <p>
            -Name: <span>{item.name}</span>
          </p>
          <p>
            -Percentage: <span>{item.percentage}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
