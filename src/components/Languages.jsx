import React from 'react';
import '../styles/components/global.styl';

function Languages({ languages }) {
  return (
    <div className="languages">
      <div className="title-container">
        <h2 className="title">Languages</h2>
      </div>
      <div className="items">
        {languages.map((item, index) => (
          <article className="item" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.percentages}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Languages;
