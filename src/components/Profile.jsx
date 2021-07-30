import React from 'react';
import '../styles/components/Profile.styl';
import Title from './Title';

const Profile = () => (
  <div className="Profile">
    <div className="Profile-title">
      <Title title="Profile" />
    </div>
    <div className="Profile-desc">
      <p>Soy desarrollador de software y me entusiasma el aplicar mis conocimientos de Frontend con Javascript y React para poder brindarle a los usuarios una experiencia e interacción más amigable con aplicaciones web. Cuento con amplia disposición para el trabajo en equipo y me importa cumplir con tiempos y metas. También tengo facilidad para aprender de forma autodidacta, lo que me ha permitido mantenerme actualizado y conocer tecnologías necesarias para el desarrollo web</p>
    </div>
  </div>
);

export default Profile;
