/* eslint-disable import/prefer-default-export */
import React from 'react';
import imgSebas from '../assets/static/sebas.jpg';

export const Header = ({ children }) => {
  return (
    <header className='Header-container'>
      <section>
        <img className='img-profile' src={imgSebas} alt='Imagen de sebastian' />
      </section>
      <div>
        <h1 className='Header-title'>Sebastian Moreno Olivera</h1>
        {children}
      </div>
    </header>
  );
};
