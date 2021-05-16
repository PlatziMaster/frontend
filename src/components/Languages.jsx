import React from 'react';

const Languages = ({ languages }) => {
  return (
    <section className="Languages">
      <h2 className="Languages-title">Languages</h2>
      <ul className="Languages-items">
      {languages.map((item, i) => <li key={i} className="Languages-item">{`${item.name} - ${item.level}`}</li>)}
    </ul>
    </section>
  )
}

export default Languages;
