import React, { useState } from 'react';
import '../styles/components/About.styl';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <>
        <div className='About-title'>About title</div>
        <div className='About-item'>item</div>
        <div className='About-item'>item</div>
        <div className='About-item'>item</div>
      </>
    );
  }
}

export default About;
