import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Academic.styl';

const Academic = ({ academic = [] }) => (
  <section className='Academic'>
    <h2 className='Academic-title'>Academic</h2>
    <div className='Academic__wrapper'>
      {academic.map(
        ({ degree, description, institution, startDate, endDate }) => (
          <div className='Academic-item' key={degree}>
            <h3>{degree}</h3>
            <h4>{institution}</h4>
            <time>
              {startDate}
              {' . '}
              {endDate}
            </time>
            <p>{description}</p>
          </div>
        ),
      )}
    </div>
  </section>
);

Academic.defaultProps = {
  academic: [],
};

Academic.propTypes = {
  academic: PropTypes.array,
};

export default Academic;
