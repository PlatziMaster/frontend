/* eslint-disable no-else-return */
import React from 'react';

import getData from '../utils/getData';
import '../styles/components/Experience.styl';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    getData('http://localhost:3000/data?q=experience')
      .then(data => this.setState({ experience: data.experience, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { experience, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div className='Experience-container'>
          <div className='Experience-title'>Work Experience</div>
          { experience.map((d, idx) => {
            return (
              <div className='Experience-item'>
                <span className='i-jobtitle'>{d.jobTitle}</span>
                <span className='i-enddate'>{d.endDate}</span>
                <br />
                <span className='i-desc'>{d.jobDescription}</span>
                <br />
                <span className='i-company'>{d.company}</span>
                <br />
                <span className='i-startdate'>{d.startDate}</span>
              </div>
            );
          })
          }
        </div>
      );
    } else {
      return (
        <>
          <div className='Experience-title'>Work Experience</div>
          <div className='Experience-item'>Loading...</div>
        </>
      );
    }
  }
}

export default Experience;
