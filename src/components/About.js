import React, { Component } from 'react';


import Contact from './Contact';
import TechAndTools from './techAndTools';
import Objectives from './Objectives';
import Interests from './Interests';
import './styles/About.styl';
import SoftSkills from './SoftSkills';


class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='photo__container'>
              <img className='photo' src={this.props.data.avatar} alt='Photo' />
            </div>
          <div className='about__container'>

            <TechAndTools data={this.props.data} />
            <Contact data={this.props.data} />
            <Objectives data={this.props.data} />
            <Interests data={this.props.data} />

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
