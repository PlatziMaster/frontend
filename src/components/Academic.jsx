import React from 'react'
import Card from './Card'
import '../styles/components/FormationList.styl'

const Academic = ({ academic }) => {
  return(
    <Card title='Education' className='Academic-title'>
      <ul className='Formation-list'>
        {academic.map(school => <li
          key={academic.indexOf(school)}
          className='Academic-item'
        >
          <h3 className='School--name'>{school.institution}</h3>
          <h4 className='School--degree'>{school.degree}</h4>
          <p>{school.description}</p>
          <ul className='School--dates'>
            <li>{school.startDate}</li>
            <li>{school.endDate}</li>
          </ul>
        </li>)}
      </ul>
    </Card>
  )
}

export default Academic