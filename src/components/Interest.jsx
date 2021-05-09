import React from 'react';
import '../styles/components/Interest.styl';

function Interest() {
  return (
    <div className='Interest'>
      <h2 className='Interest-title'>Intereses</h2>
      <ul>
        <li className='Interest-item'>Interest-1</li>
        <li className='Interest-item'>Interest-2</li>
        <li className='Interest-item'>Interest-3</li>
      </ul>
    </div>
  );
}

export default Interest;
