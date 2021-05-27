/* eslint-disable no-else-return */
import React from 'react';

import getData from '../utils/getData';
import '../styles/components/About.styl';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    getData('http://localhost:3000/data')
      .then(data => this.setState({ about: data, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { about, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <>
          <div className='About-title'>
            <h4>{about.name}</h4>
            <p>{about.profession}</p>
          </div>
          <div className='About-img'><img src={about.avatar} alt='avatar' /></div>
          <div className='About-item'>{about.address}</div>
          <div className='About-item'>{about.email}</div>
          <div className='About-item'>{about.phone}</div>
        </>
      );
    } else {
      return (
        <>
          <div className='About-title'>About me</div>
          <div className='About-item'>Loading...</div>
        </>
      );
    }
  }
}

export default About;
