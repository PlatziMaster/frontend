import React from 'react';

const Academic = ({ academic }) => (
  <section>
    <h2 className="Academic-title">Academic</h2>
    {academic.map(item => {
      return (
        <div key={item.degree} className="Academic-item">
          <span>{item.degree}</span>
          <span>{item.description}</span>
          <span>{item.endDate}</span>
          <span>{item.institution}</span>
          <span>{item.sartDate}</span>
        </div>
      );
    })}
  </section>
);

export default Academic;
