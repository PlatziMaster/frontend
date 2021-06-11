import React from 'react';
import '../styles/components/Languages.styl';

const Languages = (data) => {
  const { languages } = data;
  return (
    <section className='Languages-container'>
      <h2 className='Languages-title'>Languages</h2>
      <div className='Languages-items-container'>
        { languages &&
          languages.map(item => (
            <div className='Languages-item' key={languages.indexOf(item)}>
              <h3 className='Languages-name'>{item.name}</h3>
              <p className='Languages-percentage'>{item.percentage}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Languages;
