import React, { Component } from 'react';

import './styles/ProfessionalProfile.styl';

class Academic extends Component {
  render() {
    const data = this.props.data.academic;
    // console.log(data)

    return (
      <div>
        <h3 className='professional-profile__subtitle'>Formación académica</h3>
        <strong className='experience__title'>
          {data[0].institution}
          <br />
        </strong>
        <span className='experience__date'>
          {data[0].degree}
          {' '}
          |
          {' '}
          -
          {' '}
          {data[0].endDate}
        </span>
        <p className='text'>{data[0].description}</p>
        <strong className='experience__title'>
          {data[1].institution}
          <br />
        </strong>
        <span className='experience__date'>
          {data[1].degree}
          {' '}
          |
          {' '}
          {data[1].endDate}
        </span>
        <p className='text'>
          {data[1].description}
        </p>
        <strong className='experience__title'>
          {data[2].institution}
          <br />
        </strong>
        <span className='experience__date'>
          {data[2].degree}
          {' '}
          |
          {' '}
          -
          {' '}
          {data[2].endDate}
        </span>
        <p className='text'>{data[2].description}</p>


      </div>
    );
  }
}

export default Academic;
