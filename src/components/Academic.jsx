import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

import '../styles/components/Academic.styl';

const Academic = ({ academic }) => {
  return (
    <div className='Academic'>
      <Title name='Academic' />
      <ul className='Academic__list'>
        {academic?.map(acad => (
          <li key={acad.institution} className='Academic-item'>
            <p className='Academic-item__career'>{acad.degree}</p>
            <p className='Academic-item__info'>{acad.institution}</p>
            <p className='Academic-item__info'>
              {acad.startDate}
              {' '}
              to
              {' '}
              {acad.endDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Academic.propTypes = {
  academic: PropTypes.array.isRequired,
};

export default Academic;
