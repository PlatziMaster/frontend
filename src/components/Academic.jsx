import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({title, academic}) => {
  
  return (
    <div className="card academic">
      <h2 className="Academic-title">{title}</h2>
      {
        academic?
        academic?.map(item =>
          <div className="Academic-item" key={item.degree}>
            <h3>{item.degree}</h3> 
            <p>{item.institution}</p> 
            <p>{item.startDate} to {item.endDate}</p> 
            <p>{item.description}</p> 
          </div>
        )
        :
        <>
          <div className="Academic-item"></div>
          <div className="Academic-item"></div>
          <div className="Academic-item"></div>
        </> 
      }
    </div>
  );
}

export default Academic;
