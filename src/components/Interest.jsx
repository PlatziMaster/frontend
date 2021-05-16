import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import '../styles/components/Interest.styl';

const Interest = () => {
     const {
       data: {
         dataFromApi: {
           data: { interest },
         },
       },
     } = useContext(appContext);
     
  return (
    <section className="Container Interest Card-glass">
      <h4 className="H4-title">Interest</h4>
      <div className="Div-interest">
        {interest.map((item) => (
          <b key={item} className="Card-glass B-item" style={{padding: '10px'}}>
            <i className="bx bxs-hand-right"></i> {item}
          </b>
        ))}
      </div>
    </section>
  );
};

export default Interest;
