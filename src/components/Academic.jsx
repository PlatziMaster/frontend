/* eslint-disable no-else-return */
import React from 'react';
import getData from '../utils/getData';

import '../styles/components/Academic.styl';

class Academic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      academic: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    getData('http://localhost:3000/data?q=Academic')
      .then(data => this.setState({ academic: data.Academic, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { academic, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div className='Academic-container'>
          <div className='Academic-title'>Education</div>
          { academic.map((d, idx) => {
            return (
              <div className='Academic-item'>
                <span className='degr'>{d.degree}</span>
                <span className='enddate'>{d.endDate}</span>
                <br />
                <span className='desc'>{d.description}</span>
                <br />
                <span className='inst'>{d.institution}</span>
                <br />
                <span className='startdate'>
                  {d.startDate}
                </span>
              </div>
            );
          })
          }
        </div>
      );
    } else {
      return (
        <>
          <div className='Academic-title'>Academic</div>
          <div className='Academic-item'>Loading...</div>
        </>
      );
    }
  }
}

export default Academic;
