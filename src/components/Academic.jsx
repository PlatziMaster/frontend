import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wrapper } from '../styles/components/Wrapper';

const Academic = () => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h2 className='Academic-title'>Academic</h2>
      <ul>
        {
          data.data?.Academic?.map(
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
