import React, { Component } from 'react';

import './styles/ProfessionalProfile.styl';

class Experience extends Component {
  render() {
    const data = this.props.data.experience;
    // console.log(data)

    return (
      <div>
        <h3 className='professional-profile__subtitle'>Experiencia</h3>
        <strong className='experience__title'>
          {data[0].project}
          <br />
        </strong>
        <span className='experience__date'>
          {data[0].company}
          {' '}
          |
          {' '}
          {data[0].startDate}
          {' '}
          -
          {' '}
          {data[0].endDate}
        </span>
        <p className='text'>{data[0].jobDescription}</p>
        <strong className='experience__title'>
          {data[1].project}
          <br />
        </strong>
        <span className='experience__date'>
          {data[1].startDate}
          {' '}
          -
          {' '}
          {data[1].endDate}
        </span>
        <p className='text'>
          {data[1].jobDescription}
          <a className='experience__link' href='https://brandonargel.github.io/'>
            {' '}
            {data[1].link}
            {' '}
          </a>
          {data[1].jobDescription2}
        </p>

      </div>
    );
  }
}

export default Experience;
