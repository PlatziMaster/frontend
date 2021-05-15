import React from 'react';
import '../styles/components/Languages.css';

const Languages = ({ info }) => {
  return (
    <div className='languages'>
      <h1 className='Languages-title'>What I speak:</h1>

      <ul className='languages-list'>
        {
          info.map(language => (
            <li className='Languages-item' key={language.name}>
              <p>
                <b>Language: </b>
                {language.name}
              </p>
              <p>
                <b>Percentage: </b>
                {language.percentage}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Languages;
