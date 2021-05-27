/* eslint-disable no-else-return */
import React from 'react';

import getData from '../utils/getData';
import '../styles/components/Interest.styl';

class Interest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    getData('http://localhost:3000/data?q=interest')
      .then(data => this.setState({ interest: data.interest, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { interest, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div className='Interest-container'>
          <div className='Interest-title'>Interest</div>
          { interest.map((d, idx) => {
            return (
              <div className='Interest-item'>
                <span>{d}</span>
              </div>
            );
          })
          }
        </div>
      );
    } else {
      return (
        <>
          <div className='Interest-title'>Interest</div>
          <div className='Interest-item'>Loading...</div>
        </>
      );
    }
  }
}

export default Interest;
