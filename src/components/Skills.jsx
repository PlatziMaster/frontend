import React from 'react';
import '../styles/components/Skills.css';

const Skills = ({ skills }) => (
  <section className="Skills-container">
    <h2 className="Skills-title">Skills</h2>
    {skills.map(item => {
      return (
        <div key={item.name} className="Skills-item">
          <span>* {item.name}</span>
          <span>* {item.percentage}</span>
        </div>
      );
    })}
  </section>
);

export default Skills;
