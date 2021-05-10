import React from 'react';

import '../styles/components/item-description.css';

const ItemDescription = ({ Academic, experience }) => {

  const {
    degree,
    description,
    endDate,
    institution,
    startDate,
    company,
    jobDescription,
    jobTitle,
  } = Academic || experience || [];

  return (
    <>
      <div className='item item-title'><strong>{degree || jobTitle}</strong></div>
      <div className='item item-organization'>{institution || company }</div>
      <div className='item item-description'>
        <strong>{'Description: '}</strong>
        {description || jobDescription}
      </div>
      <div className='item item-start-date'>
        <strong>{startDate}</strong>
        {' to '}
      </div>
      <div className='item item-end-date'><strong>{endDate}</strong></div>
    </>
  );
};

export default ItemDescription;
