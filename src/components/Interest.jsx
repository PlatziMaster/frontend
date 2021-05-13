import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { Wrapper } from '../styles/components/Wrapper';

const Interest = () => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h3 className='Interest-title'>Interest</h3>
      <ul>
        {
          data.interest && data.interest.map(
            item => (
              <li key={item}>
                <h4>
                  {`${item}`}
                </h4>
                <p>hola</p>
              </li>
            ),
          )
        }
      </ul>
    </Wrapper>
  );
};

export default Interest;
