/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/components/App.styl';
import '../styles/components/Skills.styl';

function Skills({ skills }) {
  return (
    <div className="category-container skills-container">
      <h2>Skills</h2>
      {skills?.map(item => (
        <>
          <ul>
            <li key={item.name}>
              <h3>
                <b>{item.name}</b>
              </h3>
            </li>
            <li>
              <h4>{item.percentage}</h4>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
}

export default Skills;
