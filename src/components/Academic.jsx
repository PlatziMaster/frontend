import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wrapper } from '../styles/components/Wrapper';

const Academic = () => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h3 className='Academic-title'>Academic</h3>
      <ul>
        {
          data.Academic && data.Academic.map(
            item => (
              <li key={item.id} className='Academic-item'>
                <h3>{`${item.degree}`}</h3>
                <p>{`${item.institution}`}</p>
                <p>{`${item.startDate} - ${item.endDate}`}</p>
                <p>{`${item.description}`}</p>
              </li>
            ),
          )
        }
      </ul>
    </Wrapper>
  );
};

export default Academic;
