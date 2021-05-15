import React from 'react';

import './styles/techAndTools.styl';

export default function Contact() {
  return (
    <div className='techAndTools__container'>
      <h4 className='title'>Tecnologías y herramientas</h4>
      <div className='techAndTools__info'>
        <p>
          <img className='techAndTools__logo' src='https://www.pngrepo.com/png/183637/512/html5.png' alt='HTML' />
          <strong>
            HTML 5
            <span className='percentaje'>90%</span>
          </strong>
        </p>
        <p>
          <img className='techAndTools__logo' src='https://www.pngix.com/pngfile/big/193-1937198_image-result-for-css3-icon-css-logo-transparent.png' alt='CSS' />
          <strong>
            CSS 3
            <span className='percentaje'>85%</span>
          </strong>
        </p>
        <p>
          <img className='techAndTools__logo' src='https://norbertoledo.es/feed/img/news/javascript-logo.png' alt='JavaScript' />
          <strong>
            JavaScript
            <span className='percentaje'>70%</span>
          </strong>
        </p>
        <p>
          <img className='techAndTools__logo' src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='Git' />
          <strong>
            Git
            <span className='percentaje'>85%</span>
          </strong>
        </p>
        <p>
          <img className='techAndTools__logo' src='https://i.imgur.com/JDdLgT8.png' alt='GitHub' />
          <strong>
            GitHub
            <span className='percentaje'>85%</span>
          </strong>
        </p>
        <p>
          <img className='techAndTools__logo' src='https://i.imgur.com/EGHeITc.png' alt='Figma' />
          <strong>
            Figma
            <span className='percentaje'>85%</span>
          </strong>
        </p>
        <p>
          <img className='techAndTools__logo' src='https://i.imgur.com/HqhiRES.png' alt='Terminal' />
          <strong>
            Terminal
            <span className='percentaje'>60%</span>
          </strong>
        </p>
        <p>
          <img className='techAndTools__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' alt='React' />
          <strong>
            React
            <span className='percentaje'>40%</span>
          </strong>
        </p>
      </div>
    </div>
  );
}
