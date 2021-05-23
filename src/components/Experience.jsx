import React from 'react';
import '../styles/components/Experience.styl'

const Experience = ({ experience }) => {
  return (
    <div className='experience__container'>
      <h2 className='experience__title'>Experience</h2>
      {
        experience.map( item =>
          <div key={experience.indexOf(item)}>
            <h3 className='experience__degree'>{item.degree}</h3>
              <h4 className='experience__company'>{item.company}</h4>
              <div className="experience__date">
                <span>{item.startDate}</span>
                <span> - {item.endDate}</span>
              </div>
            <p className="experience__description">{item.jobDescription}</p>
          </div>
        )
      }
    </div>
  )
}

export default Experience 