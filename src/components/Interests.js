import React, { Component } from 'react';

import './styles/Interests.styl';

class Interests extends Component {
  render() {

    const data = this.props.data.about.interest;

    return (
      <div className='interests__container'>
        <h4 className='title'>Intereses</h4>
        <ul className='interests__info'>
          <li>{data[0]}</li>
          <li>{data[1]}</li>
          <li>{data[2]}</li>
          <li>{data[3]}</li>
          <li>{data[4]}</li>
          <li>{data[5]}</li>
        </ul>
      </div>
    );
  }
}

export default Interests;
