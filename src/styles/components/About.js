import React from 'react';

class About extends React.Component {
  render() {
    return (

      <div className='containerAbout'>
        <div className='name'>Alejandra Diaz Rojas</div>
        <div className='profession'>Ingeniera Química</div>
        <div className='address'>Calle 123 # 45 -67 </div>

        <div className='email'>ale.diaz.5@hotmail.com</div>

        <div className='phone'>+57 320 8036220</div>

        <div className='avatar'>
          <img className='photo' src='https://static.platzi.com/media/avatars/avatars/alejandra-diaz-rojas_b9962e8a-55e0-4d21-b23e-2a385558dbee.png' alt='Alejandra' />
        </div>
      </div>
    );
  }
}

export default About;
