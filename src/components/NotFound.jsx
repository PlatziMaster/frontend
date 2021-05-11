import React from 'react';
import PropTypes from 'prop-types';

// import errorImg from '';

const NotFound = ({ error }) => {
  return (
    <div className='NotFound'>
      <img src='public/not-found.svg' alt='Not found' />
      <p>{error}</p>
    </div>
  );
};

NotFound.propTypes = {
  error: PropTypes.any,
};

export default NotFound;
