import React from 'react';
import '../styles/components/Academic.styl';

/**
 * Academic component
 * Props:
 * @param {component} children - Get the AcademicCard component
 */
const Academic = ({children}) => (
  <div className="container-academic">
    <div className="flex-container">
      <span className="material-icons icon-big">
        class
      </span>
      <div className="title margin-y-1">Academic</div>
    </div>
    <div className="container-cards">{children}</div>
  </div>
);

export default Academic;
