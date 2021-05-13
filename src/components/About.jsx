import React from 'react'
import '../styles/components/About.styl'

const About = ({ address, email, website, telegram }) => {
  return(
    <ul className='About-list'>
      <li className='About-item'>{ address }</li>
      <li className='About-item'>{ email }</li>
      <li className='About-item'>{ website }</li>
      <li className='About-item'>{ telegram }</li>
    </ul>
  )
}

export default About