import React from 'react';

import '../styles/components/Item-description.css';

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
      <div className='Item Item-title'><strong>{degree || jobTitle}</strong></div>
      <div className='Item Item-organization'>{institution || company }</div>
      <div className='Item Item-description'>
        <strong>{'Description: '}</strong>
        {description || jobDescription}
      </div>
      <div className='Item Item-start-date'>
        <strong>{startDate}</strong>
        {' to '}
      </div>
      <div className='Item Item-end-date'><strong>{endDate}</strong></div>
    </>
  );
};

export default ItemDescription;
