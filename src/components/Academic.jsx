import React from 'react';
import '../styles/components/Academic.css';

const Academic = ({ info = [] }) => {

  return (
    <div className='academic'>
      <h1 className='Academic-title'>My learning:</h1>
      <ul className='academic-list'>
        {
          info.map(item => (
            <li className='Academic-item' key={item.startDate}>
              <p>
                <b>📜 Degree: </b>
                {item.degree}
              </p>
              <p>
                <b>📝 Description: </b>
                {item.description}
              </p>
              <p>
                <b>📅 Start Date: </b>
                {item.startDate}
              </p>
              <p>
                <b>📅 End Date: </b>
                {item.endDate}
              </p>
              <p>
                <b>🏫 Institution: </b>
                {item.institution}
              </p>

            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Academic;
