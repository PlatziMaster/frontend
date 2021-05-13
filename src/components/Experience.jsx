import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wrapper } from '../styles/components/Wrapperfull';

const Experience = ({ children }) => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h1 className='Experience-title'>Experience</h1>
      <ul>
        {
          data.experience && data.experience.map(
            item => (
              <li key={item.id} className='Experience-item'>
                <h3>{`${item.company}`}</h3>
                <p>{`${item.startDate} (in progress)`}</p>
                <p>{`${item.jobTitle}`}</p>
                <p>{`${item.jobDescription}`}</p>
              </li>
            ),
          )
        }
      </ul>
    </Wrapper>
  );
};

export default Experience;
