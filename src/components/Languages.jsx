import React from 'react';
import '../styles/components/Languages.styl';

const Language = ({ languages = [] }) => {
  return (
    <div className='Languages-title'>
      <h4>- Languages</h4>
      {
        languages.map((l) => {
          return (
            <div key={l.id} className='Languages-item'>
              <p>{l.name}</p>
              <p>{l.level}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Language;
