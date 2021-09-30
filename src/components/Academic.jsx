/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/components/App.styl';

function Academic({ Academic }) {
  return (
    <div className="category-container">
      <h2>Academic</h2>
      {Academic?.map(item => (
        <>
          <li key={item.degree}>
            <h3>{item.degree}</h3>
          </li>
          <li>
            <p>{item.description}</p>
          </li>

          <li>
            <b>From: </b> {item.startDate}
          </li>

          <li>
            <b>To: </b> {item.endDate}
          </li>
        </>
      ))}
    </div>
  );
}

export default Academic;
