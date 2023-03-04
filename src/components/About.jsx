import React from 'react';
import '../styles/components/About.css';

export default function About({ name, profession, phone, email, website, address, avatar }) {
  return (
    <div className='about'>
      <div className='personal-information'>
        <img className='img-profile About-item' src={avatar} alt='Gaby Di Grazia' />
        <h3 className='about-title About-item'>{name}</h3>
        <h1 className='About-item'>{profession}</h1>
        <div className='contact-information'>
          <div>
            <h5 className='About-item'>
              <span role='img' aria-label='phone'>📱 </span>
              {phone}
            </h5>
            <h5 className='About-item'>
              <span role='img' aria-label='mail'>📧 </span>
              {email}
            </h5>
          </div>
          <h5 className='About-item'>
            <span role='img' aria-label='address'>🏠 </span>
            {address}
          </h5>
          <a className='About-item' href={website} target='_blank' rel='noreferrer'>
            <span role='img' aria-label='web'>🌐 </span>
            {website}
          </a>
        </div>
      </div>
    </div>
  );
}
