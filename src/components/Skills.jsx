import React from 'react';

const Skills = ({ skills = [] }) => {
  /**
   * De la respuesta de la API recibe un arreglo
   * de habilidades
   */
  return (
    <div className="Skills Container">
      <h2 className="Skills-title">
        <i className="fas fa-brain"></i>
        Skills
      </h2>
      {skills.map(({ name, percentage }, id) => (
        <div className="Skills-item" key={id}>
          <h3>
            {name} <small className="date">{percentage}</small>
          </h3>
          <progress id="file" value={percentage.slice(0, 2)} max="100">
            {percentage}
          </progress>
        </div>
      ))}
    </div>
  );
};

export default Skills;
