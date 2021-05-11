import React from 'react';
import '../styles/components/InterestItem.css';
import PropTypes from 'prop-types';

const InterestItem = ({ name }) => (
  <div className='interest-container'>
    <h3 className='interest-item'>{name}</h3>
  </div>
);

InterestItem.propTypes = {
  name: PropTypes.string,
};

export default InterestItem;
