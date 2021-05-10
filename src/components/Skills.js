import React from 'react';
import ItemSkill from './Item-skills';

import '../styles/components/Skills.css';

const Skills = ({ data }) => {

  const skills = data || [{ key: 1 }, { key: 2 }, { key: 3 }];

  return (
    <div className='Skills-title'>
      <h1>Skills</h1>
      {skills != null &&
        skills.map(item => (
          <div key={item.name || item.key} className='Skills-item'>
            <ItemSkill skills={item} />
          </div>
        ))
      }
    </div>
  );
};

export default Skills;
