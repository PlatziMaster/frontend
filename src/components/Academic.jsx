import React from 'react';
import '../styles/components/Academic.css';

const Academic = ({ academic }) => (
  <section className="Academic-container">
    <h2 className="Academic-title">Academic</h2>
    <div>
      {academic.map(item => {
        return (
          <div key={item.degree} className="Academic-item">
            <span>* {item.degree}</span>
            <span>* {item.description}</span>
            <span>* {item.endDate}</span>
            <span>* {item.institution}</span>
            <span>* {item.startDate}</span>
          </div>
        );
      })}
    </div>
  </section>
);

export default Academic;
