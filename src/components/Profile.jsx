import React from 'react';
import '../styles/components/Profile.styl';
import Title from './Title';

const Profile = () => (
  <div className="Profile">
    <div className="Profile-title">
      <Title title="Profile" />
    </div>
    <div className="Profile-desc">
      <p>Soy estudiante de Ingeniería en Tecnologías de la Información y aspiro a desarrollarme profesionalmente, considerando en todo momento los valores que mi familia ha inculcado en mí. Además de programar, me gusta la música, el deporte, convivir con mi familia y amigos y pasear a mi perro. Busco aplicar mis conocimientos en Desarrollo de Software a beneficio de mi comunidad, siendo una persona proactiva, responsable y consciente de que cada decisión que tome, puede afectar de manera positiva o negativa al futuro de la sociedad. Aunque estudie en una Institución Educativa tradicional, también busco la forma de adquirir nuevos conocimientos de manera continua y autodidacta, utilizando herramientas digitales.</p>
    </div>
  </div>
);

export default Profile;
