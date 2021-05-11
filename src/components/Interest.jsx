import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  return (
    <div className='Interest'>
      <Title name='Interest' />
      <ul className='Interest__list'>
        {interest?.map(int => (
          <li key={int} className='Interest-item'>{int}</li>
        ))}
      </ul>
    </div>
  );
};

Interest.propTypes = {
  interest: PropTypes.array.isRequired,
};

export default Interest;
