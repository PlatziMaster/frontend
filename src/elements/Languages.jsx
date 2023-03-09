import React from 'react';
import { TbLanguage } from 'react-icons/tb';

const Languages = ({ languages }) => {
  return (
    <div className='box language'>
      <div className='flex align-items-center gap-2'>
        <TbLanguage color='#588B8B' />
        <div className='title'>Lenguajes</div>
      </div>

      <div style={{ marginTop: '8px' }}>
        {languages &&
          languages.length > 0 &&
          languages.map((language, index) => {
            return (
              <div key={language.name} className='progress-container'>
                <div className='language-name'>{language.name}</div>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    style={{ width: `${language.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Languages;
