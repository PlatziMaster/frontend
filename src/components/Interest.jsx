import React, { useContext } from 'react';
import '../styles/components/Interest.styl';

import AppContext from '../utils/AppContext';

function Interest() {
  const state = useContext(AppContext);

  return (
    <div className='Interest'>
      <h2 className='Interest-title'>Intereses</h2>
      <ul>
        {
          state.interest && state.interest.map(
            (item, idx) => (
              <li key={idx} className='Interest-item'>{item}</li>
            ),
          )
        }
      </ul>
    </div>
  );
}

export default Interest;
