import React from 'react';
import '../styles/components/global.styl';

function Academic({ academic }) {
  return (
    <div className="academy">
      <div className="title-container">
        <h2 className="title text">Academy</h2>
      </div>
      <div className="items">
        {academic.map((item, index) => (
          <article className="item" key={item.id}>
            <h3 className="">{item.degree}</h3>
            <p>{item.description}</p>
            <p>
              <span>{item.endDate}</span>
              <span>{item.StartDate}</span>
            </p>
            <ul>
              <li>{item.institution}</li>
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Academic;
