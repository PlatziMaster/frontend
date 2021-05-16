import React from 'react';
import '../styles/components/Social.styl'

const Social = ({ social }) => {
  return (
    <div className="social">
      <ul className='social-list'>
        {
          social.map(socialItem =>
          <li
            key={social.indexOf(socialItem)}
          >
            <a className="social-item" href={socialItem.url}><img className="social-icon" src={socialItem.icon} alt='social icon'/>{socialItem.name}</a>
          </li>)
        }
      </ul>
    </div>
  )
}

export default Social