import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import '../styles/components/Languages.styl';

const Languages = () => {
  const {
    data: {
      dataFromApi: {
        data: { Languages },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Languages Container Card-glass">
      <h4 className="H4-title Languages-title">Languages</h4>
      {Languages.map(({ name }, i) => (
        <div key={i} className="Languages-name">{name}</div>
      ))}
    </section>
  );
};

export default Languages;
