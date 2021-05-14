import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { Wrapper } from '../styles/components/Wrapper';

const Skills = () => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h2 className='Skills-title'>Skills</h2>
      {
        data.skills && data.skills.map(
          item => (
            <li key={item.id} className='Skills-item'>
              <div>
                <h3>{`${item.name}`}</h3>
                <p>{`${item.percentage}`}</p>
              </div>
            </li>
          ),
        )
      }
    </Wrapper>
  );
};

export default Skills;
