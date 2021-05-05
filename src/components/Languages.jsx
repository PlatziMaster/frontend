import React from 'react';

import '../styles/components/Languages.styl';
const Languages = ({ Languages = [] }) => {
  return (
    <div className="Languages">
      <h1 className="Languages-title">Languages</h1>

      {Languages.map(item => (
        <div className="Languages--container--items">
          <p className="Languages-item">
            -Name: <span className="Languages-item">{item.name}</span>
          </p>
          <p className="Languages-item">
            -Percentage:
            <span className="Languages-item">{item.percentage}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Languages;
