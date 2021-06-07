import React from 'react';
import '../styles/components/global.styl';

function Skills({ skills }) {
  return (
    <div className="skills">
      <div className="title-container">
        <h2 className="title text">Professional Skills</h2>
      </div>
      {skills.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="items" key={index}>
          <p>
            <span className="item">{item.name}</span>
            <span className="item">{item.percentage}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
