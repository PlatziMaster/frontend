import React from 'react';
import '../styles/components/Languages.styl';

const Languages = (props) => {
  const { languages } = props;
  
  return (
    <div className="card languages">
      <h2 className="Languages-title">Languages</h2>
      { languages?
        languages?.map?.(item =>
          <div className="Languages-item" key={item.name}>
            <h3>{item.name}</h3> 
            <p>{item.percentage}</p> 
          </div>
          
        )
        :
        <>
          <div className="Languages-item"></div>
          <div className="Languages-item"></div>
          <div className="Languages-item"></div>
        </>
      }
    </div>
  );
}

export default Languages;
