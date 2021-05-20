import React, { Component } from 'react';

import Contact from './Contact';
import TechAndTools from './techAndTools';
import Objectives from './Objectives';
import Interests from './Interests';
import './styles/About.styl';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='about__container'>
          <div className='photo__container'>
            <img className='photo' src={this.props.data.avatar} alt='Photo' />
          </div>
          <Contact className="about-item" data={this.props.data} />
          <TechAndTools className="about-item" data={this.props.data} />
          <Objectives className="about-item" data={this.props.data} />
          <Interests className="about-item" data={this.props.data} />

        </div>
      </React.Fragment>
    );
  }
}

export default About;
