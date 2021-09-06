import React from 'react';
import '../styles/components/Experience.styl'

const Experience = ({ experience }) => {
  return (
    <div className='experience'>
      <h1 className='experience-title'>Experiencia:</h1>
      {
        experience.map( job =>
        <div
          className='experience-item'
          key={experience.indexOf(job)}
        >
          <h3 className='experience-jobTitle'>{job.jobTitle}</h3>
          <div className='experience-container'>
            <h4 className='experience-company'>{job.company}</h4>
            <div>
              <span>{job.startDate}</span>
              <span> - {job.endDate}</span>
            </div>
          </div>
          <p>{job.jobDescription}</p>
        </div>)
      }
    </div>
  )
}

export default Experience