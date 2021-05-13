import React from 'react'
import Card from './Card'
import '../styles/components/FormationList.styl'

const Experience = ({ experience }) => {
  return(
    <Card title='Experience' className='Experience-title'>
      <ul className='Formation-list'>
        {experience.map(job => <li
          key={experience.indexOf(job)}
          className='Experience-item'
        >
          <h3 className='Job--name'>{job.company}</h3>
          <h4 className='Job--title'>{job.jobTitle}</h4>
          <p>{job.jobDescription}</p>
          <ul className='Job--dates'>
            <li>{job.startDate}</li>
            <li>{job.endDate}</li>
          </ul>
        </li>)}
      </ul>
    </Card>
  )
}

export default Experience