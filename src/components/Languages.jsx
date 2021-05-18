import React from 'react';

const Languages = ({ data = [] }) => {
  return (
    <div className="Card">
      <h1 className="Languages-title">Languages</h1>
      <ul className="Percentage-list">
        {data.map(language => (
          <li key={data.indexOf(language)} className="Languages-item">
            <span>{language.name}</span>
            <span>{language.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
