import React from 'react';

const Languages = ({ languages }) => (
  <section>
    <h2 className="Languages-title">Languages</h2>
    {languages.map(item => {
      return (
        <div key={item.name} className="Languages-item">
          <span>{item.name}</span>
          <span>{item.percentage}</span>
        </div>
      );
    })}
  </section>
);

export default Languages;
