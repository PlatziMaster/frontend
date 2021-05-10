import React, { useContext } from 'react';
import '../styles/components/Experience.styl';

import AppContext from '../utils/AppContext';

function Experience() {
  const state = useContext(AppContext);

  return (
    <div className='Experience'>
      <h2 className='Experience-title'>Experiencia Laboral</h2>
      <ul>
        {
          state.experience && state.experience.map(
            item => (
              <li key={item.id} className='Experience-item'>
                <p>{`${item.company}. ${item.startDate} - ${item.endDate}`}</p>
                <p><u>{`${item.jobTitle}`}</u></p>
                <p>{`${item.jobDescription}`}</p>
              </li>
            ),
          )
        }
      </ul>
    </div>
  );
}

export default Experience;
