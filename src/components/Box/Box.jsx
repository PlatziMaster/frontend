import React from 'react';
import '../../styles/components/Box.styl';

const Box = ({ children, className = '' }) => {
  return (
    <div className={`Box ${className}`}>
      {children}
    </div>
  );
};

export default Box;
