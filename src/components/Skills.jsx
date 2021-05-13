import React from 'react'
import Card from './Card'
import '../styles/components/PercentageList.styl'

const Skills = ({ skills }) => {
  return(
    <Card title='Skills'  className='Skills-title'>
      <ul className='Percentage-list'>
        {skills.map(skill => <li
          key={skills.indexOf(skill)}
          className='Skills-item'
        >
          <span>
            {skill.name}
          </span>
          <span>
            {skill.percentage}
          </span>
        </li>)}
      </ul>
    </Card>
  )
}

export default Skills