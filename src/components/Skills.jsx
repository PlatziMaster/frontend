import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import Item from './Item';
import '../styles/components/Skills.styl';

const Skills = () => {
  const {
    data: {
      dataFromApi: {
        data: { skills },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Container Skills Card-glass">
      <h4 className="H4-title">Skills</h4>
      <div className="Div-Skills">
        {skills.map(({ name, percentage }) => (
          <Item key={name} name={name} percentage={percentage} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
