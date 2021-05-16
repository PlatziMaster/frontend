import React from 'react';
import '../styles/components/Interests.styl';

const Interests = ({ data = [] }) => {
  const list = data.map(item => (
    <li className='list-item' key={item.name}>
      <span>{ item.name }</span>
    </li>
  ));
  return (
    <div className='Interests'>
      <span className='title'>Interests</span>
      <ul>
        { data.length ? list : <p>No data</p>}
      </ul>
    </div>
  );
};

export default Interests;