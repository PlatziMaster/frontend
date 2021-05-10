import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({title, interest}) => {
  
  return (
    <div className="card interest">
      <h2 className="Interest-title">{title}</h2>
      { interest?
        interest?.map?.(item =>
          <div className="Interest-item" key={item}>
            <h3>{item}</h3> 
          </div>
          
        )
        :
        <>
          <div className="Interest-item"></div>
          <div className="Interest-item"></div>
          <div className="Interest-item"></div>
        </>
      }
    </div>
  );
}

export default Interest;
