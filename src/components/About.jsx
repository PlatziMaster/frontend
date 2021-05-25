import React from 'react';
import '../styles/components/About.styl';

/* Componente about me*/

const About = ({ profession, phone, email, website, address, avatar }) => {

  return (
    <section className='About flex'>
      <div className='About-content grid'>
        <p><strong>{profession || 'Profession'}</strong></p>
        <ul className='About-list flex'>
          <li className='About-item'>{phone || 'Phone number'}</li>
          <li className='About-item'>
            <a href={website} target='_blank' rel='noreferrer'>{website || 'Website'}</a>
          </li>
          <li className='About-item'>{email || 'Email'}</li>
        </ul>
        <p className='About-adress'>{address || 'Address'}</p>
      </div>
      <figure className='About-img flex'>
        <img
          loading='lazy'
          src={avatar || ''}
          alt='Profile'
        />
      </figure>
    </section>
  );
};

export default About;
