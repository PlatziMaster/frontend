import React, { Component } from 'react';

import './styles/Contact.styl';

class Contact extends Component {
  render() {

    const data = this.props.data.about;

    return (
      <div className='contact__container'>
        <h4 className='title'>Contáctame en</h4>
        <div className='contact__info'>
          <p>
            <strong>
              Teléfono:
              {data.phone}
            </strong>
          </p>
          <p>
            <strong>
              Ubicación:
              {data.address}
            </strong>
          </p>
          <p>
            <strong>Correo:</strong>
            <a href='mailto:brandargel@gmail.com'>
              {' '}
              {data.email}
            </a>
          </p>
          <p>
            <strong>Sitio:</strong>
            <a href='https://brandonargel.github.io/'>
              {' '}
              {data.website}
            </a>
          </p>
          <p>
            <strong>Linkedin:</strong>
            <a href='https://www.linkedin.com/in/brandargel/'>
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
