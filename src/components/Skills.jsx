import React, { useContext } from 'react';
import '../styles/components/Skills.styl';

import AppContext from '../utils/AppContext';

function Skills() {
  const state = useContext(AppContext);

  return (
    <div className='Skills'>
      <h2 className='Skills-title'>Habilidades</h2>
      <ul>
        {
          state.skills && state.skills.map(
            item => (
              <li key={item.id} className='Skills-item'>
                <div className='Skills--Percentage'>
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

export default Skills;
