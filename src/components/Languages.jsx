import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import Item from './Item';
import '../styles/components/Languages.styl';

const Languages = () => {
  const {
    data: {
      dataFromApi: {
        data: { languages },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Lenguage Container Card-glass">
      <h4 className="H4-title">Languages</h4>
      {languages.map(({ name, percentage }) => (
        <Item key={name} name={name} percentage={percentage} />
      ))}
    </section>
  );
};

export default Languages;
