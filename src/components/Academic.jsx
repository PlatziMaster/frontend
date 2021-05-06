import React from 'react';

const Academic = ({ academic = [] }) => {
  return (
    <div className="Academic Container">
      <h2 className="Academic-title">
        <i className="fas fa-graduation-cap"></i>
        Academic
      </h2>
      {academic.map((academ, id) => {
        const { degree, description, endDate, startDate, institution } = academ;
        return (
          <div key={id} className="Academic-item">
            <h3 className="Academic-item-title">
              {degree}
              <small className="date">
                {startDate} - {endDate}
              </small>
            </h3>
            <small>{institution}</small>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Academic;
