import React, { useContext } from 'react';
import '../styles/components/Social.styl';

import AppContext from '../utils/AppContext';

function Social() {
  const state = useContext(AppContext);

  return (
    <div className='Social'>
      <ul>
        {
          state.social && state.social.map(
            item => (
              <li key={item.id}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  <img src={item.icon} width='32' alt={item.name} title={item.name} />
                </a>
              </li>
            ),
          )
        }
      </ul>
    </div>
  );
}

export default Social;
