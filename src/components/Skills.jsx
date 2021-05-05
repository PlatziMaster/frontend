import React from 'react';
import '../styles/components/Skills.scss';

const Skills = ({ children }) => (
  <section className="skills">
    <div className="skills__container">
      {children}
    </div>
  </section>
);

export default Skills;