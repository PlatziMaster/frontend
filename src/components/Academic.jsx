import React from 'react';
import '../styles/components/Academic.styl'

function Academic({degree, description, institution, startDate, endDate}) {
  return( 
    <div className="AcademicContainer">
      <h3 className="Academic-title">{degree}</h3>
        <span className="Academic-item">{description}</span>
        <span className="Academic-item">{institution}</span>
        <span className="Academic-item">{`${startDate} ${endDate}`}</span>
    </div>
   
  )
}; 

export default Academic; 