import React from 'react';
import About from './About';
import './styles/Header.styl';

class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <div className='Header__img'>
          <img src='' alt='' />
        </div>
        <div className='Header__main-info'>
          <h1 className='Header-title'>Paula Daniela Velosa Romero</h1>
          <div className='Header-job-title'>front end developer</div>
          <div className='Header-phone'>322545668</div>
          <div className='Header-email'>paula.velosa</div>
          <div className='Header-website'>pvelosa.netlify</div>
          <div className='Header-address'>cra 101 no 83*90</div>
        </div>
        <div className='Header__about'>
          <About />
        </div>

      </div>
    );
  }

}

export default Header;
