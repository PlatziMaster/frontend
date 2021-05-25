import React from 'react';
import '../styles/components/Languages.styl';

/**
 * Languages component
 * Props:
 * @param {component} children - Get the LanguagesCard component
 * @param {string} title - Title of the section that represents this component
 */
const Languages = ({title, children}) => (
  <div className="container-languages">
    <div className="flex-container">
      <span className="material-icons icon-big">
        record_voice_over
      </span>
      <div className="title margin-y-1">{title}</div>
    </div>
    <div className="container-cards">{children}</div>
  </div>
);

export default Languages;
