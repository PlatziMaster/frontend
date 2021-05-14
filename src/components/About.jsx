import React from 'react';
import '../styles/components/About.styl';

const formatedPhone = (phone) => {
  if (!phone) {
    return null;
  }
  const cleaned = (`${phone}`).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[2]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

const About = ({ profession, phone, email, website, address, avatar }) => {
  const phoneFormat = formatedPhone(phone) || phone;

  return (
    <section className='About grid'>
      <figure className='About-avatar flex'>
        <img
          loading='lazy'
          src={avatar || ''}
          alt='Profile avatar'
        />
      </figure>
      <div className='About-content grid'>
        <p className='About-title'><strong>{profession || 'Profession'}</strong></p>
        <ul className='About-list flex'>
          <li className='About-item'>{phoneFormat || 'Phone number'}</li>
          <li className='About-item'>
            <a href={website} target='_blank' rel='noreferrer'>{website || 'Website'}</a>
          </li>
          <li className='About-item'>{email || 'Email'}</li>
        </ul>
        <p className='About-adress'>{address || 'Address'}</p>
      </div>
    </section>
  );
};

export default About;
