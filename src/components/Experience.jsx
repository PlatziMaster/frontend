/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import '../styles/components/global.styl';

function Experience({ experiences }) {
  return (
    <div className="grid">
      <div className="experiences">
        <h2 className="title">Experiences</h2>
        <div className="items">
          {experiences.map((item, index) => (
            <article className="item" key={item.id}>
              <h3 className="">{item.company}</h3>
              <h4>{item.jobTitle}</h4>
              <p>{item.jobDescription}</p>
              <p>
                <span>{item.startDate}</span> - <span>{item.endDate}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
