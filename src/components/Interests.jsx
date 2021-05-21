import React from 'react';

import '../styles/components/Interests.styl'


const Interest = ({ interests }) => {
  return (
    <div className='interest'>
      <h2 className='interest-title'>Intereses</h2>
      {
        interests.map(interestItem =>
          <ul
            className='interest-list'
            key={interests.indexOf(interestItem)}
          >
            <li className='interest-itme'>{interestItem}</li>
          </ul>
        )
      }
    </div>
  )
}

export default Interest
