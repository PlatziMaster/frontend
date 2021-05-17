// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const Projects = ({ projects }) => (
  <>
    <div className='botonned rightboxes'>
      <a href='https://github.com/jesuskata' target='_blank' rel='noreferrer'>
        <h1 className='bottomline' id='Projects-title'>Algunos Proyectos de Desarrollo de Software</h1>
      </a>
    </div>
    <div className='bottoned rightboxes' id='Projects-item'>
      {projects?.map((project) => (
        <a key={project.name} href={project.url} target='_blank' rel='noreferrer'>
          <div className='card'>
            <img src={project.image} alt='pokedex project' />
            <div className='cardcontainer'>
              <h4>{project.name}</h4>
              <p>{project.stack}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};
