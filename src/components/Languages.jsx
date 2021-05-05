import React from 'react';

import '../styles/components/Languages.styl';
const Languages = ({ Languages = [] }) => {
  return (
    <div className="Languages">
      <h1>Languages</h1>

      {Languages.map(item => (
        <div className="Languages--container--items">
          <p>
            -Name: <span>{item.name}</span>
          </p>
          <p>
            -Percentage: <span>{item.percentage}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Languages;
