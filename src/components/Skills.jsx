import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { Wrapper } from '../styles/components/Wrapper';
import LogoSkill from './LogoSkill';

const Skills = () => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h2 className='Skills-title'>Skills</h2>
      <span>(click to see certificates)</span>
      <div className='container'>
        {
          data.skills && data.skills.map(
            item => (
              <li key={item.id} className='Skills-item'>
                <h3>
                  {`${item.name}`}
                </h3>
                <a href={item.url}>
                  <LogoSkill id={item.id} />
                </a>
                <p>{`${item.percentage}`}</p>
              </li>
            ),
          )
        }
      </div>
    </Wrapper>
  );
};

export default Skills;
