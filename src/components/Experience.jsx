/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/components/App.styl';
import '../styles/components/Experience.styl';

function Experience({ experience }) {
  return (
    <div className="category-container">
      <h2>Experience</h2>
      {experience?.map(item => (
        <>
          <ul>
            <li key={item.company}>
              <h3>Company: {item.company}</h3>
            </li>
            <li>
              <p>{item.description}</p>
            </li>

            <li>
              <b>Job Title: </b> {item.jobTitle}
            </li>

            <li>
              <b>Job Description: </b> {item.jobDescription}
            </li>

            <li>
              <b>From: </b> {item.startDate}
            </li>

            <li>
              <b>To: </b> {item.endDate}
            </li>
          </ul>
        </>
      ))}
    </div>
  );
}

export default Experience;
