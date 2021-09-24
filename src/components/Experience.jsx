/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export const Experience = () => {
  return (
    <div className='Experience-container'>
      <h2 className='Experience-title'>Experience and personal projects</h2>
      <p className='Experience-item'>
        I have several projects that around the time I have been building in
        some Platzi courses, these are some of them:
      </p>
      <br />
      <p className='Experience-item'>
        <a
          className='Experience-item-link'
          href='https://sebastianmoreno731.github.io/Cientifico/#'
          target='_blank'
        >
          1. Rick and Morty Directory
        </a>
      </p>
      <p className='Experience-item'>
        <a
          className='Experience-item-link'
          href='https://sebastianmoreno731.github.io/CursoMobileFirst/'
          target='_blank'
        >
          2. Batatabit
        </a>
      </p>
      <p className='Experience-item'>
        <a
          className='Experience-item-link'
          href='https://sergio401.github.io/Ecommerce-Store-A/'
          target='_blank'
        >
          3. Shop Games
        </a>
      </p>
    </div>
  );
};
