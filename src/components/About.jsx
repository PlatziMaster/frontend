import React from 'react';
import '../styles/components/About.styl'

const About = ({ address, email, website, phone, linkedin}) => {
  return (
    <div className='about__container'>
      <h2 className="about__title">Contact</h2>
      <ul className='about__unordered-list'>
        <li>
          <p className="about-item">
            {address}
          </p>
        </li>
        <li>
          <a className="about-item" href={`mailto:${email}`}>
            {email}
            </a>
          </li>
        <li>
          <a className="about-item" href={website} target='__blank'>
          {website}
          </a>
        </li>
        <li>
          <p className="about-item">
          {phone}
          </p>
        </li>
        <li>
          <a className="about-item" href={linkedin} target='__blank'>
          {linkedin}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About