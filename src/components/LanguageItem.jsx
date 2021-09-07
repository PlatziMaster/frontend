import React from 'react';
import '../styles/components/LanguageItem.css';
import PropTypes from 'prop-types';

const LanguageItem = ({ name, percentage }) => (
  <div className='language-item'>
    <h3 className='level'>{name}</h3>
    <h3 className='percentage'>{percentage}</h3>
  </div>
);

LanguageItem.propTypes = {
  name: PropTypes.string,
  percentage: PropTypes.string,
};

export default LanguageItem;
