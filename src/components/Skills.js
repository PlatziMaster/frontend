import React from 'react';
import '../styles/components/App.styl';

const Skills = ({ data }) => {
  const skills = Object.values(data);

  return (
    <div>
      <h2>Habilidades</h2>
      <ul>
        {skills.map(habilidad => (
          <li>
            {habilidad.name}
            {' '}
            {habilidad.percentage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
