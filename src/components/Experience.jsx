import React from 'react';
import uniqid from 'uniqid';
import '../styles/components/Experience.css';

const Experience = ({ experience }) => {

  return (
    <div className='experience contenido'>
      <div className='Experience-title contenido-titulo title'>Experiencia</div>
      <div className='contenido-detalles'>
        <div className=''>
          {
            (experience) ?
              experience.map(item => (
                <div className='Experience-item' key={uniqid()}>
                  <section>
                    <h4 className='title2'>
                      {item.company}
                      {' '}
                      <span className='sub-title'>{item.jobTitle}</span>
                    </h4>
                    <p className='descripcion'>
                      <strong>Descripción: </strong>
                      {item.jobDescription}
                    </p>
                    <ul>
                      <p>Tiempo en el cargo</p>
                      <li>
                        Inicio:
                        {item.startDate}
                      </li>
                      <li>
                        Final:
                        {item.endDate}
                      </li>
                    </ul>
                  </section>
                </div>
              )) :
              null
          }
        </div>
      </div>
      <div className='Experience-item' />
      <div className='Experience-item' />
      <div className='Experience-item' />
    </div>
  );
};

export default Experience;
