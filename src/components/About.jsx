import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { WrapperAbout } from '../styles/components/About';

const About = () => {
  const data = useContext(AppContext);
  return (
    <WrapperAbout>
      <h3 className='About-title'>Contact Me</h3>
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
    </WrapperAbout>
  );
};

export default About;
