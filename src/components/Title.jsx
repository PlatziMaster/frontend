import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Title.styl';

const Title = ({ name }) => {
  return (
    <h3 className='Title'>
      {name}
      <hr />
    </h3>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
