import React from 'react';
import '../styles/components/Skills.styl';

const Skill = ({ name, percentage, color }) => {
  return (
    <div className={`skills-box line-${color} line-${percentage}`}>
      <p>{name}</p>
      <p>
        {percentage}
        <span>%</span>
      </p>
    </div>
  );
};

const Skills = ({ skills }) => {
  return (
    <div className='wrapper'>
      <h3>Skills</h3>
      <div className='skills-wrapper'>
        {skills &&
          skills.map((sk, i) => <Skill key={`${Math.random(i)}`} {...sk} />)}
      </div>
    </div>
  );
};

export default Skills;
