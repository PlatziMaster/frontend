import React from 'react';
import ProgressBar from './Progressbar';

const Languages = ({ languages }) => (
  <section className='Languages'>
    <h2 className='Languages-title'>Languages</h2>
    {languages ? languages.map(language => (
      <div className='Languages-item' key={`${language.name}`}>
        <ProgressBar skill={language} />
      </div>
    )) : (
      <>
        <div className='Languages-item'>Languages-item</div>
        <div className='Languages-item'>Languages-item</div>
        <div className='Languages-item'>Languages-item</div>
      </>
    )}
  </section>
);

export default Languages;
