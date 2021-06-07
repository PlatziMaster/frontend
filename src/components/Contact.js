import React, { Component } from 'react';

import './styles/Contact.styl';

class Contact extends Component {
  render() {

    const data = this.props.data.about;

    return (
      <div className='contact__container'>
        <h4 className='title'>Contácto</h4>
        <div className='contact__info'>
          <p>
            Teléfono:
            {data.phone}
          </p>
          <p>
            {data.address}
          </p>
          <p>
            <a href='mailto:ing.angelauribe@outlook.com'>
              {' '}
              {data.email}
            </a>
          </p>
          <p>
            <strong>Sitio: </strong>
            <a href='https://AngelaUribe.github.io/'>
              {' '}
              {data.website}
            </a>
          </p>
          <p>
            <a href='https://www.linkedin.com/in/angela-patricia-uribe-laiseca-012b5521/'>
              {' '}
              {data.linkedin}
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
