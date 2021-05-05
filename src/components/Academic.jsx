import React from 'react';

import '../styles/components/Academic.styl';

const Academic = ({ Academic = [] }) => {
  return (
    <div className="Academic">
      <h1 className="Academic-title">Academic</h1>
      <div className="Academic--items-container">
        {Academic.map(item => (
          <div className="Academic--items">
            <p className="Academic-item" key={1}>
              -Degree: <span>{item.degree}</span>
            </p>
            <p className="Academic-item" key={2}>
              -Description: <span>{item.description}</span>
            </p>
            <p className="Academic-item" key={3}>
              -EndDate: <span>{item.endDate}</span>
            </p>
            <p className="Academic-item" key={4}>
              -Institution: <span>{item.institution}</span>
            </p>
            <p className="Academic-item" key={5}>
              -StartDate: <span>{item.startDate}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academic;
