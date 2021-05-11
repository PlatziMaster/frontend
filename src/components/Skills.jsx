import React from 'react';
import '../styles/components/Skills.css';

const Skills = ({ children, title }) => (
  <div className='skills'>
    <h3 className='skills-title'>{title}</h3>
    {children}
  </div>
);

export default Skills;
