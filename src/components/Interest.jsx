import React from 'react';

const Interest = ({ interest }) => (
  <section className="Interest-container">
    <h2 className="Interest-title">Interest</h2>
    {interest.map(item => {
      return (
        <div key={item} className="Interest-item">
          <span>* {item}</span>
        </div>
      );
    })}
  </section>
);

export default Interest;
