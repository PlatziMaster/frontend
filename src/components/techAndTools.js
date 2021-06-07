import React, { Component } from 'react';

import './styles/techAndTools.styl';

class TechAndTools extends Component {
  render() {

    const data = this.props.data.about.skills;

    return (
      <div className='techAndTools__container'>
        <h4 className='title'>HABILIDADES</h4>
        <div className='techAndTools__info'>
          <p>
            
            <strong>
              {data[0].name}
              <span className='percentaje'>
                {' '}
                {data[0].percentage}
              </span>
            </strong>
          </p>
          <p>
            
            <strong>
              {data[1].name}
              <span className='percentaje'>
                {' '}
                {data[1].percentage}
              </span>
            </strong>
          </p>
          <p>
            
            <strong>
              {data[2].name}
              <span className='percentaje'>
                {' '}
                {data[2].percentage}
              </span>
            </strong>
          </p>
          <p>
            
            <strong>
              {data[3].name}
              <span className='percentaje'>
                {' '}
                {data[3].percentage}
              </span>
            </strong>
          </p>
          <p>
            
            <strong>
              {data[4].name}
              <span className='percentaje'>
                {' '}
                {data[4].percentage}
              </span>
            </strong>
          </p>
          <p>
            
            <strong>
              {data[5].name}
              <span className='percentaje'>
                {' '}
                {data[5].percentage}
              </span>
            </strong>
          </p>
          <p>
          
            <strong>
              {data[6].name}
              <span className='percentaje'>
                {' '}
                {data[6].percentage}
              </span>
            </strong>
          </p>
          <p>
          
            <strong>
              {data[7].name}
              <span className='percentaje'>
                {' '}
                {data[7].percentage}
              </span>
            </strong>
          </p>
        </div>
      </div>
    );

  }
}

export default TechAndTools;
