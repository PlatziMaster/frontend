import React from 'react';

import '../styles/components/Interests.styl'


const Interest = ({ interests }) => {
  return (
    <div className='interest__container'>
      <h2 className='interest__title'>Interests</h2>
      <div className='interest__listContainer'>
      {
        interests.map(interestItem =>
          <ul
            className='interest__list'
            key={interests.indexOf(interestItem)}
          >
            <li className='interest__item'>{interestItem}</li>
          </ul>
        )
      }
      </div>
    </div>
  )
}

export default Interest