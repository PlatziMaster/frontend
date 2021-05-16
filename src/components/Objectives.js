import React, { Component } from 'react';

import './styles/Objectives.styl';

class Objectives extends Component {
  render() {

    const data = this.props.data.about.objectives;

    return (
      <div className='objectives__container'>
        <h4 className='title'>Objetivos</h4>
        <div className='objectives__info'>
          <p className='text_objectives'>
            <img className='objectives__logo' src='https://i.imgur.com/aRzd1XL.png' alt='Objective' />
            {data[0]}
          </p>
          <p className='text_objectives'>
            <img className='objectives__logo' src='https://i.imgur.com/aRzd1XL.png' alt='Objective' />
            {data[1]}
            Nunca parar de aprender.
          </p>
          <p className='text_objectives'>
            <img className='objectives__logo' src='https://i.imgur.com/aRzd1XL.png' alt='Objective' />
            {data[2]}
          </p>
        </div>
      </div>
    );
  }
}

export default Objectives;
