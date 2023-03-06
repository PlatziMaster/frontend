import React from 'react';
import '../index.css';
import data from '../data/data.json';

const Skills = () => {
  return (
    <div className='skills'>
      <h2 className='skills-title'>Habilidades</h2>
      <ul className='skills-list'>
        {data.data.skills.map((skill) => (
          <li className='skill-item'>
            <span className='skill-name'>{skill.name}</span>
            <div className='skill-progress'>
              <div className='skill-progress-value' style={{ width: skill.percentage }}></div>
            </div>
            <span className='skill-percent'>{skill.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
