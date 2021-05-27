/* eslint-disable quotes */
/* eslint-disable no-else-return */
import React from 'react';
import getData from '../utils/getData';

import '../styles/components/Skills.styl';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    getData('http://localhost:3000/data?q=skills')
      .then(data => this.setState({ skills: data.skills, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { skills, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div className='Skills-container'>
          <div className='Skills-title'>Professional Skills</div>
          { skills.map((d, idx) => {
            return (
              <div className='Skills-item'>
                <div className='container'>
                  <span className='chart'>{d.name}</span>
                  <div className='filler' style={{ "width": d.percentage, backgroundColor: '#121A3E' }}>
                    <span className='label-pr'>{`${d.percentage}`}</span>
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
      );
    } else {
      return (
        <>
          <div className='Skills-title'>Professional Skills</div>
          <div className='Skills-item'>Loading...</div>
        </>
      );
    }
  }
}

export default Skills;
