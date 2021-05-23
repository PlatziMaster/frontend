import React from 'react';
import '../styles/components/Social.styl'

const Social = ({ social }) => {
  return (
    <div className='social__container'>
      {
        social.map((social, index) =>
          <ul
            className='social__list'
            key={index}
          >
            <li className='social__item'>
              <a href={social.url} target="_blank"><img className='social__icon' src={social.icon}></img></a>
            </li>
          </ul>
        )
      }
    </div>
    
  )
}

export default Social