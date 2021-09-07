import React from 'react';
import '../styles/components/Experience.css';

const Experience = ({ children, title }) => (
  <div className='experience'>
    <h3 className='experience-title'>{title}</h3>
    {children}
  </div>
);

export default Experience;
