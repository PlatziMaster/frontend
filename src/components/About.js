import React from 'react';
import './styles/About.styl';

function About(props) {
  return (
    <div className='About'>
      {props.social.map((item) => {
        return <a href={item.url}>{item.name}</a>;
      })}
    </div>
  );

}

export default About;
