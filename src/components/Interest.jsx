import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({title, interest}) => {
  
  return (
    <div className="card interest">
      <h2>{title}</h2>
      {
        interest?.map(item =>
          <div className="interest__item" key={item}>
            <h3>{item}</h3> 
          </div>
          
        )
      }
    </div>
  );
}

export default Interest;
