import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wrapper } from '../styles/components/Wrapper';

const About = () => {
  const data = useContext(AppContext);
  return (
    <Wrapper>
      <h3 className='About-title'>About</h3>
      <ul>
        {
          data.social && data.social.map(
            item => (
              <li key={item.id}>
                <h3>{`${item.name}`}</h3>
                <h3>{`${item.url}`}</h3>
              </li>
            ),
          )
        }
      </ul>
    </Wrapper>
  );
};

export default About;
