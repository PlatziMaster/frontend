import React from 'react';

const Language = ({ languages = [] }) => {

  return (
    <div className='languages__container'>
      <h4>- Languages</h4>
      {
        languages.map((l) => {
          return (
            <div key={l.id} className='languages__list'>
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
