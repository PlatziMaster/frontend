import React, { useContext } from 'react';
import '../styles/components/Languages.styl';

import AppContext from '../utils/AppContext';

function Languages() {
  const state = useContext(AppContext);

  return (
    <div className='Languages'>
      <h2 className='Languages-title'>Idiomas</h2>
      <ul>
        {
          state.languages && state.languages.map(
            item => (
              <li key={item.id} className='Languages-item'>
                <div className='Languages--Percentage'>
                  <p>{item.name}</p>
                  <div className='progress'>{item.percentage}</div>
                </div>
              </li>
            ),
          )
        }
      </ul>
    </div>
  );
}

export default Languages;
