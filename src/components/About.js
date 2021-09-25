import React from 'react';
import './styles/About.styl';

function About(props) {
  return (
    <div className='About'>
      {props.social.map((item) => {
        return <div className="About-social">

          <div className="About-icon">
          <a href={item.url}>
          <img   src={item.icon} alt = {item.name}/></a>
          </div>
          <div className="About-icon-description"><a href={item.url}>
          {item.name}</a></div>
          </div>
      })}
    </div>
  );

}

export default About;
