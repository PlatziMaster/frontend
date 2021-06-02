import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { Wrapper } from '../styles/components/Wrapper';

const Interest = () => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h2 className='Interest-title'>Interest</h2>
      <ul>
        {
          data.data?.interest?.map(
            item => (
              <li key={item}>
                <h4>
                  {`${item}`}
                </h4>
              </li>
            ),
          )
        }
      </ul>
    </Wrapper>
  );
};

export default Interest;
