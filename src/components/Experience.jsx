import React from 'react';
import '../styles/components/Experience.css';

const Experience = ({ info = [] }) => {

  return (
    <div className='experience'>
      <h1 className='Experience-title'>Where I have been: </h1>
      <ul className='experience-items-list'>
        {
          info.map(cosas => (
            <li className='Experience-item' key={cosas.startDate}>
              <p>
                <b>🏢 Company name: </b>
                {cosas.company}
              </p>
              <p>
                <b>📅Start Date: </b>
                {cosas.startDate}
              </p>
              <p>
                <b>📅End Date: </b>
                {cosas.endDate}
              </p>
              <p>
                <b>👨‍💻Job Title: </b>
                {cosas.jobTitle}
              </p>
              <p>
                <b>📃Job Description: </b>
                {cosas.jobDescription}
              </p>
            </li>
          ))
        }
      </ul>

    </div>
  );
};

export default Experience;
