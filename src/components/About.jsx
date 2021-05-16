import React from 'react';
import '../styles/components/About.styl'

const About = ({ address, email, website, phone, addressIcon, emailIcon, websiteIcon, phoneIcon }) => {
  return (
    <div className='about'>
      <ul className='about-list'>
        <li>
          <p className="about-item">
            <img className='about-icon' src={addressIcon} alt='Address icon'/>
            {address}
          </p>
        </li>
        <li>
          <a className="about-item" href={`mailto:${email}`}>
            <img className='about-icon' src={emailIcon} alt='Email icon'/>
            {email}
            </a>
          </li>
        <li>
          <a className="about-item" href={website} target='__blank'><img className='about-icon' src={websiteIcon} alt='website icon'/>
          {website}
          </a>
        </li>
        <li>
          <a className="about-item" href={`tel:${phone}`} target='__blank'><img className='about-icon' src={phoneIcon} alt='phone icon'/>
          {phone}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About
