import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  return (
    <div className='Languages'>
      <Title name='Languages' />
      <ul className='Languages__list'>
        {languages?.map(language => (
          <li key={language.name} className='Languages-item'>
            {language.name}
            {' '}
            -
            {' '}
            {language.percentage}
          </li>
        ))}
      </ul>
    </div>
  );
};

Languages.propTypes = {
  languages: PropTypes.array.isRequired,
};

export default Languages;
