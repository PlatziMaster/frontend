import React from 'react';

import '../styles/components/Interest.styl'


const Interest = ({ interests }) => {
  return (
    <div className='interest__container'>
      <h2 className='Interest-title'>Interests</h2>
      <div className='interest__listContainer'>
      {
        interests && interests.map(interestItem =>
          <ul
            className='interest__list'
            key={interests.indexOf(interestItem)}
          >
            <li className='Interest-item'>{interestItem}</li>
          </ul>
        )
      }
      </div>
      <div className='Interest-item' />
      <div className='Interest-item' />
      <div className='Interest-item' />
    </div>
  )
}

export default Interest