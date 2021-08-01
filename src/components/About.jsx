import React from 'react';

import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';
import github from '../assets/images/github.png'; 
import twitter from '../assets/images/twitter.png';

import '../styles/components/About.styl'; 

function About({url, name}) {
  return( 
    <section className="About">
      <a href={url}><img className="About-item" src={`./assets/images/${name}.png`} alt={`${name} icon`} /></a>
    </section>    
  )
}; 

export default About; 