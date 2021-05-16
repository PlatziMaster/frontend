import React, { Component } from 'react';

import './styles/techAndTools.styl';

class TechAndTools extends Component {
  render() {

    const data = this.props.data.about.skills;

    return (
      <div className='techAndTools__container'>
        <h4 className='title'>Tecnologías y herramientas</h4>
        <div className='techAndTools__info'>
          <p>
            <img className='techAndTools__logo' src='https://www.pngrepo.com/png/183637/512/html5.png' alt='HTML' />
            <strong>
              {data[0].name}
              <span className='percentaje'>
                {' '}
                {data[0].percentage}
              </span>
            </strong>
          </p>
          <p>
            <img className='techAndTools__logo' src='https://www.pngix.com/pngfile/big/193-1937198_image-result-for-css3-icon-css-logo-transparent.png' alt='CSS' />
            <strong>
              {data[1].name}
              <span className='percentaje'>
                {' '}
                {data[1].percentage}
              </span>
            </strong>
          </p>
          <p>
            <img className='techAndTools__logo' src='https://norbertoledo.es/feed/img/news/javascript-logo.png' alt='JavaScript' />
            <strong>
              {data[2].name}
              <span className='percentaje'>
                {' '}
                {data[2].percentage}
              </span>
            </strong>
          </p>
          <p>
            <img className='techAndTools__logo' src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='Git' />
            <strong>
              {data[3].name}
              <span className='percentaje'>
                {' '}
                {data[3].percentage}
              </span>
            </strong>
          </p>
          <p>
            <img className='techAndTools__logo' src='https://i.imgur.com/JDdLgT8.png' alt='GitHub' />
            <strong>
              {data[4].name}
              <span className='percentaje'>
                {' '}
                {data[4].percentage}
              </span>
            </strong>
          </p>
          <p>
            <img className='techAndTools__logo' src='https://i.imgur.com/EGHeITc.png' alt='Figma' />
            <strong>
              {data[5].name}
              <span className='percentaje'>
                {' '}
                {data[5].percentage}
              </span>
            </strong>
          </p>
          <p>
            <img className='techAndTools__logo' src='https://i.imgur.com/HqhiRES.png' alt='Terminal' />
            <strong>
              {data[6].name}
              <span className='percentaje'>
                {' '}
                {data[6].percentage}
              </span>
            </strong>
          </p>
          <p>
            <img className='techAndTools__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' alt='React' />
            <strong>
              {data[7].name}
              <span className='percentaje'>
                {' '}
                {data[7].percentage}
              </span>
            </strong>
          </p>
        </div>
      </div>
    );

  }
}

export default TechAndTools;
