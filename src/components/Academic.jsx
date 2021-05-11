import React from 'react';
import '../styles/components/Academic.css';

const Academic = ({ children, title }) => (
  <div className='academic'>
    <h3 className='academic-title'>{title}</h3>
    {children}
  </div>
);

export default Academic;
