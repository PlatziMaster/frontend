import React from 'react';
import '../styles/components/Interest.styl'


const Interest = ({ interest }) => {
  return (
    <div className='interest'>
      <h2 className='interest-title'>Intereses</h2>
      {
        interest.map(interestItem =>
          <ul
            className='interest-list'
            key={interest.indexOf(interestItem)}
          >
            <li className='interest-itme'>{interestItem}</li>
          </ul>
        )
      }
    </div>
  )
}

export default Interest
