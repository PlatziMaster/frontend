import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { Wrapper } from '../styles/components/Wrapper';

const Languages = () => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h2 className='Languages-title'>Languages</h2>
      <ul>
        {
          data.languages && data.languages.map(
            item => (
              <li key={item.id} className='Languages-item'>
                <div>
                  <h3>{`${item.name}`}</h3>
                  <p>{`${item.percentage}`}</p>
                </div>
              </li>
            ),
          )
        }
      </ul>
    </Wrapper>
  );
};

export default Languages;
