import React from 'react';

const Languages = ({ languages = [] }) => {
  return (
    <div className="Languages Container">
      <h2 className="Languages-title">
        <i className="fas fa-language"></i>
        Languages
      </h2>
      {languages.map(({ name, percentage }, id) => (
        <div className="Languages-item" key={id}>
          <h3>
            {name} <small className="date">{percentage}</small>
          </h3>
          <progress id="file" value={percentage.slice(0, 2)} max="100">
            {percentage}
          </progress>
        </div>
      ))}
    </div>
  );
};

export default Languages;
