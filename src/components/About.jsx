import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { WrapperAbout } from '../styles/components/About';
import github from '../assets/images/github-icon-1.png';
import linkedin from '../assets/images/linkedin-icon-2.png';

const About = () => {
  const data = useContext(AppContext);
  return (
    <WrapperAbout>
      <h3 className='About-title'>Contact Me</h3>
      <ul>
        {
          data.data?.social?.map(
            item => (
              <li key={item.id}>
                <h3>{`${item.name}`}</h3>
                <a href={`${item.url}`}>
                  { item.id === 1 ? <img src={github} alt='github' /> : <img src={linkedin} alt='linkedin' />}
                </a>
              </li>
            ),
          )
        }
      </ul>
    </WrapperAbout>
  );
};

export default About;
