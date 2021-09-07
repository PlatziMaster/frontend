import React from 'react';
import '../styles/components/Interest.css';

const Interest = ({ children, title }) => (
  <div className='interest'>
    <h3 className='interest-title'>{title}</h3>
    {children}
  </div>
);

export default Interest;
