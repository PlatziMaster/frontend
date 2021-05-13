import React from 'react'
import Card from './Card'
import '../styles/components/Interest.styl'

const Interest = ({ interest }) => {
  return(
    <Card title='Interest' className='Interest-title'>
      <ul className='Interest-list'>
        {interest.map(interestItem => <li
          key={interest.indexOf(interestItem)}
          className='Interest-item'
        >
          { interestItem }
        </li>)}
      </ul>
    </Card>
  )
}

export default Interest