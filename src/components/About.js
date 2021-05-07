import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className='About'>
        <p>{this.props.phone}</p>
        <p>{this.props.email}</p>
        <p>{this.props.website}</p>
        <br />
        <p className='address'>{this.props.address}</p>
      </div>
    );
  }
}
export default About;
