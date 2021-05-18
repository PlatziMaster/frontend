import React from 'react';
import '../styles.css';

class Profile extends React.Component {
  render() {
    return (
      <div className='containerProfile'>

        <div className='regularProfile'>
          <h2>Perfil</h2>
          <p> Ingeniera química bilingüe de la Universidad de los Andes con estudios complementarios en emprendimiento y gestión. Interés profesional en creación y desarrollo de nuevos productos. Tengo alta capacidad de planeación y análisis, aprendizaje, escucha activa e iniciativa.</p>
        </div>
        <div className='platziMaster'>
          <h2>¿Por qué quiero estar en PlatziMaster?</h2>
          <p> Hace unas semanas empecé a profundizar sobre programación al isncribirme a Road to Code 3.0. Con los conocimientos del segundo curso sobre HTML y CSS logré desarrollar esta página. Con lo que aprendí sobre React este fin de semana, logré crear estos componentes. Tengo tiempo, disposición y puedo aprender rápidamente.</p>

        </div>
      </div>
    );
  };
}

export default Profile;
