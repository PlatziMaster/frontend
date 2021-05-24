import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({
  languages,
}) => {

  return (
    <div className='languages'>
      <h2 className='languages-title'>Idiomas</h2>
      {languages &&
        languages.map((item, index) => {
          const { id } = index;
          return (
            <div key={id} className='languages-item'>
              <h3 className='languages-name'>{item.name}</h3>
              <progress
                value={item.percentage}
                max='100'
              >
                {item.percentage}
              </progress>
            </div>
          );
        })}
    </div>
  );
};

export default Languages;
