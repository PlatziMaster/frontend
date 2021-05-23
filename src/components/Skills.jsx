import React from 'react';
import '../styles/components/Skills.styl'


const Skills = ({ skills }) => {
  return (
    <div className='skills__container'>
      <h2 className='Skills-title'>Skills:</h2>
      {
        skills && skills.map( skill =>
        <div className='skills__listContainer'>
            {skill.name}
        <div
          className='Skills-item'
          key={skills.indexOf(skill)}
        >
          <div className="skills__progressbar" style={{width:skill.percentage}}>{skill.percentage}</div>
        </div>
        </div>
        )
      }
      <div className='Skills-item' />
      <div className='Skills-item' />
      <div className='Skills-item' />
    </div>
  )
}

export default Skills 