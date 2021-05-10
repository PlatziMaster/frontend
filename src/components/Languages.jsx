import React from 'react';
import '../styles/components/Languages.styl';

const Languages = (props) => {
  const { languages } = props;
  
  return (
    <div className="card languages">
      <h2>Languages</h2>
      {
        languages?.map(item =>
          <div className="languages__item" key={item.name}>
            <h3>{item.name}</h3> 
            <p>{item.percentage}</p> 
          </div>
          
        )
      }
    </div>
  );
}

export default Languages;
