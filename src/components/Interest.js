import React from 'react';
import './styles/Interest.styl';

class Interest extends React.Component {
  render() {
    return (
      <div className='Interest'>
        <h1 className='Interest-title'> this is ma Interest</h1>
        <div className='Interest-item'>this is an item</div>
        <div className='Interest-item'>this is an item</div>
        <div className='Interest-item'>this is an item</div>
      </div>
    );
  }

}

export default Interest;
