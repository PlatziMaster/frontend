import React from 'react';
import '../styles/components/Skills.css';

export default function Skills({ title, skills }) {
  return (
    <div className='skills'>
      <h3 className='skills-title'>{title}</h3>
      {skills && skills?.map((item) => {
        return (
          <div className='skills-item' key={skills.indexOf(item)}>
            <h3 className='skill-name'>{item.name}</h3>
            <h3 className='percentage'>{item.percentage}</h3>
          </div>
        );
      })}
    </div>
  );
}
