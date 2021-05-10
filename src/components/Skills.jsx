import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({title, skills}) => {
  
  return (
    <div className="card skills">
      <h2 className="Skills-title">{title}</h2>
      { skills ?
        skills?.map?.(item =>
          <div className="Skills-item" key={item.name}>
            <h3>{item.name}</h3> 
            <p>{item.percentage}</p> 
          </div>
        )
        :
        <div>
          <div className="Skills-item"></div>
          <div className="Skills-item"></div>
          <div className="Skills-item"></div>
        </div>
      }
    </div>
  );
}

export default Skills;
