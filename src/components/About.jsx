import React from 'react';
import '../styles/components/About.styl'

const About = ({ address, email, website, phone, linkedin}) => {
  return (
    <div className='about__container'>
      <h2 className="about__title">Contact</h2>
      <ul className='about__unordered-list'>
        <li>
          <p className="about-item">
            Dirección: {address}
          </p>
        </li>
        <li>
        Email: {" "}
          <a className="about-item" href={`mailto:${email}`}>
            {email}
            </a>
          </li>
        <li>
        Sitio Web: {" "}
          <a className="about-item" href={website} target='__blank'>
          {website}
          </a>
        </li>
        <li>
        Phone: {" "}
          <a className="about-item" href={`tel:${phone}`} target='__blank'>
          {phone}
          </a>
        </li>
        <li>
        Linkedin: {" "}
          <a className="about-item" href={linkedin} target='__blank'>
          @brandargel
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About
