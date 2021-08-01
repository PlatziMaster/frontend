import React from 'react';
import '../styles/components/Skills.styl';


function Skills({ name, percentage }) {
  return( 
    <section className="SkillsContainer"> 
      <p><span className="Skills-title">{name}</span><span className="Skills-item">{percentage}</span></p>
    </section>
  )
}; 

export default Skills; 