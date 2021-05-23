import React from 'react';
import '../styles/components/Skills.styl'


const Skills = ({ skills }) => {
  return (
    <div className='skills__container'>
      <h2 className='skills__title'>Skills:</h2>
      {
        skills.map( skill =>
        <div className='skills__listContainer'>
            {skill.name}
        <div
          className='skills__item'
          key={skills.indexOf(skill)}
        >
          <div className="skills__progressbar" style={{width:skill.percentage}}>{skill.percentage}</div>
        </div>
        </div>
        )
      }
    </div>
  )
}

export default Skills 