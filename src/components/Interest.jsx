import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import '../styles/components/Interest.styl';

const Interest = () => {
  const {
    data: {
      dataFromApi: {
        data: { Interest },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Container Interest Card-glass">
      <h4 className="H4-title">Interest</h4>
      <div className="Div-interest">
        {Interest.map((item, i) => (
          <div key={i} className="Interest-name">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interest;
