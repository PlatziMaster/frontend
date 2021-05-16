import React from 'react';
import '../styles/components/Academic.styl'

const Academic = ({ academic }) => {
  return (
    <div className='academic'>
      <h2 className='academic-title'>Educación:</h2>
      {
        academic.map( school =>
          <div
            className='academic-item'
            key={academic.indexOf(school)}
          >
            <h3 className='academic-degree'>{school.degree}</h3>
            <div className='academic-container'>
              <h4 className='academic-institution'>{school.institution}</h4>
              <div>
                <span>{school.startDate}</span>
                <span> - {school.endDate}</span>
              </div>
            </div>
            <p>{school.description}</p>
          </div>
        )
      }
    </div>
  )
}

export default Academic