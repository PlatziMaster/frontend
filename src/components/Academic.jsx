import React, { useContext } from 'react';
import '../styles/components/Academic.styl';

import AppContext from '../utils/AppContext';

function Academic() {
  const state = useContext(AppContext);

  return (
    <div className='Academic'>
      <h2 className='Academic-title'>Formacion Profesional</h2>
      <ul>
        {
          state.Academic && state.Academic.map(
            item => (
              <li key={item.id} className='Academic-item'>
                <p>{`${item.degree}`}</p>
                <p><u>{`${item.description}`}</u></p>
                <p>{`${item.institution}. ${item.startDate} - ${item.endDate}`}</p>
              </li>
            ),
          )
        }
      </ul>
      <div className='Certificates'>
        <ul>
          {
            state.certificate && state.certificate.map(
              item => (
                <li key={item.id} className='Certificate-item'>
                  <p>{`${item.name}. Issued ${item.date}`}</p>
                  <p><u>{`${item.institution}`}</u></p>
                </li>
              ),
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default Academic;
