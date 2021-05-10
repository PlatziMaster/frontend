import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({title, skills}) => {
  
  return (
    <div className="card skills">
      <h2 className="Skills-title">{title}</h2>
      {
        skills?.map(item =>
          <div className="skills__item" key={item.name}>
            <h3>{item.name}</h3> 
            <p>{item.percentage}</p> 
          </div>
          
        )
      }
    </div>
  );
}

export default Skills;
