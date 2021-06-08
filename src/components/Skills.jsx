import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import '../styles/components/Skills.styl';

const Skills = () => {
  const {
    data: {
      dataFromApi: {
        data: { Skills },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Container Skills Card-glass">
      <h4 className="H4-title Skills-title">Skills</h4>
      <div className="Div-Skills">
        {Skills.map(({ name }, i) => (
          <div key={i} className="Skills-name">{name}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
