import React from 'react';

import './styles/ProfessionalProfile.styl';

export default function Academic() {
  return (
    <div>
      <h3 className='professional-profile__subtitle'>Formación académica</h3>
      <strong className='experience__title'>
        Escuela Politécnica Ing. Jorge Matute Remus
        <br />
      </strong>
      <span className='experience__date'>Tecnólogo Profesional en Informática | Ago 2017 - Jun 2021</span>
      <p className='text'>Estudio una carrera técnica de informática donde he aprendido las bases de la programación y el desarrollo Web. Haciendo también prácticas profesionales y proyectos que me permitieron desarrollar y practicar mis conocimientos.</p>
      <strong className='experience__title'>
        Platzi
        <br />
      </strong>
      <span className='experience__date'>Frontend, English, Software Development | Sep 2019 - Actualidad</span>
      <p className='text'>
        Soy un estudiante de la plataforma de educación online Platzi.
        En donde he aprendido sobre Desarrollo Web, programación, Inglés y también he desarrollado algunas habilidades blandas.
      </p>

    </div>
  );
}
