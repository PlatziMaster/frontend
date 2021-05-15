import React from 'react';

import './styles/Objectives.styl';

export default function Objectives() {
  return (
    <div className='objectives__container'>
      <h4 className='title'>Objetivos</h4>
      <div className='objectives__info'>
        <p className='text_objectives'>
          <img className='objectives__logo' src='https://i.imgur.com/aRzd1XL.png' alt='Objective' />
          {' '}
          Crear Software de calidad y accesible para todas las personas.
        </p>
        <p className='text_objectives'>
          <img className='objectives__logo' src='https://i.imgur.com/aRzd1XL.png' alt='Objective' />
          {' '}
          Nunca parar de aprender.
        </p>
        <p className='text_objectives'>
          <img className='objectives__logo' src='https://i.imgur.com/aRzd1XL.png' alt='Objective' />
          {' '}
          Adquirir nuevas habilidades.
        </p>
      </div>
    </div>
  );
}
