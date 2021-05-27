/* eslint-disable no-else-return */
import React from 'react';
import getData from '../utils/getData';

import '../styles/components/Languages.styl';

class Languages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    getData('http://localhost:3000/data?q=languages')
      .then(data => this.setState({ languages: data.languages, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { languages, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div className='Languages-container'>
          <div className='Languages-title'>Languages</div>
          { languages.map((d, idx) => {
            return (
              <div className='Languages-item'>
                <div className='container'>
                  <span className='chart'>{d.name}</span>
                  <div className='filler' style={{ 'width': d.percentage, backgroundColor: '#121A3E' }}>
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
          <div className='Languages-title'>Languages</div>
          <div className='Languages-item'>Loading...</div>
        </>
      );
    }
  }
}

export default Languages;
