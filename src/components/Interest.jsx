import React from 'react';
import '../styles/components/Interest.styl';

/**
 * Interest component
 * Props:
 * @param {component} children - Get the InterestCard component
 * @param {string} title - Title of the section that represents this component
 */
const Interest = ({title, children}) => (
  <div className="container-interest">
    <div className="flex-container">
      <span className="material-icons icon-big">
        sports_esports
      </span>
      <div className="title margin-y-1">{title}</div>
    </div>
    <div className="container-cards">{children}</div>
  </div>
);

export default Interest;
