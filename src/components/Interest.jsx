/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/components/App.styl';
import '../styles/components/Interest.styl';

function Interest({ interest }) {
  return (
    <div className="category-container">
      <h2>Interests</h2>
      {interest?.map(item => (
        <>
          <ul>
            <li>
              <h3>{item}</h3>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
}

export default Interest;
