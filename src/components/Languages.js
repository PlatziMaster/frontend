import React, { Component } from 'react';

class Languages extends Component {
  render() {
    const data = this.props.data.languages;
    // console.log(data);

    return (
      <React.Fragment>
        <h3 className='professional-profile__subtitle'>Lenguajes</h3>
        <ul>
          <li className='soft__skills'>
            {data[0].name}
            :
            {' '}
            {data[0].level}
          </li>
          <li className='soft__skills'>
            {data[1].name}
            :
            {' '}
            {data[1].level}
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Languages;
