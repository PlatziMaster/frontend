import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Interest.styl';

const Interest = ({ interest = [] }) => (
  <section className='Interest'>
    <h2 className='Interest-title'>Interest</h2>
    <div className='Interest__wrapper'>
      {interest.map(hobby => (
        <p className='Interest-item' key={hobby}>
          {hobby}
        </p>
      ))}
    </div>
  </section>
);

Interest.propTypes = {
  interest: PropTypes.array.isRequired,
};

export default Interest;
