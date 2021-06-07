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
            
            {data[0]}
          </p>
          <p className='text_objectives'>
            
            {data[1]}
          </p>
          <p className='text_objectives'>
            
            {data[2]}
          </p>
        </div>
      </div>
    );
  }
}

export default Objectives;
