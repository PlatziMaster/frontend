import React from 'react';
import '../styles/components/Skills.styl'


const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      <h2 className='skills-title'>Habilidades:</h2>
      {
        skills.map( skill =>
        <div
          className='skills-item'
          key={skills.indexOf(skill)}
        >
          <h3 className='skills-name'>{skill.name}</h3>
          <p>{skill.percentage}</p>
        </div>
        )
      }
    </div>
  )
}

export default Skills