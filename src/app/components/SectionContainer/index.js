import React from 'react';
import './SectionContainer.scss';

export default ({ title, children, style, id }) => {
  return (
    <div
      id={id}
      className='sectionContainer'
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};
