import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/About.styl';

const About = ({ name, profession, address, email, website }) => {
  const splitName = name.split(' ');

  return (
    <article className='About'>
      <h4 className='About__job'>{profession}</h4>
      <h2 className='About__title'>
        <b>{splitName[0]}</b>
        {' '}
        {splitName[1]}
      </h2>
      <ul className='About__info'>
        <li className='About-item'>
          <i className='fa fa-envelope' />
          <a href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li className='About-item'>
          <i className='fa fa-globe' />
          <a href='https://github.com/yadurani' target='_blank' rel='noreferrer'>
            {website}
          </a>
        </li>
        <li className='About-item'>
          <i className='fa fa-map-marker-alt' />
          {address}
        </li>
      </ul>
    </article>
  );
};

About.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default About;
