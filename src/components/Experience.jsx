import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { WrapperExperience } from '../styles/components/Experience';

const Experience = () => {
  const data = useContext(AppContext);
  return (
    <WrapperExperience>
      <h2 className='Experience-title'>Experience</h2>
      <ul>
        {
          data.data?.experience?.map(
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
    </WrapperExperience>
  );
};

export default Experience;
