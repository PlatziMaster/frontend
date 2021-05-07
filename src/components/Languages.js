import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Languages.styl';

const Languages = ({ languages = [] }) => (
  <section className='Languages'>
    <h2 className='Languages-title'>Languages</h2>
    <div className='Languages__wrapper'>
      {languages.map(({ name, percentage }) => (
        <p className='Languages-item' key={name}>
          {name}
          {' : '}
          {percentage}
        </p>
      ))}
    </div>
  </section>
);

Languages.propTypes = {
  languages: PropTypes.array.isRequired,
};

export default Languages;
