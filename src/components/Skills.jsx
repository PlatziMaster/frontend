import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="Skills">
      <h2 className="Skills-title">Skills</h2>
      <ul className="Skills-items">
        {skills.map((item, i) => <li key={i} className="Skills-item">{item.name}</li>)}
      </ul>
    </section>
  )
}

export default Skills;
