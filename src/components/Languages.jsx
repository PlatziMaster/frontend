import React from 'react';
import '../styles/components/Languages.css';

const Languages = ({ children, title }) => (
  <div className='language'>
    <h3 className='language-title'>{title}</h3>
    {children}
  </div>
);

export default Languages;
