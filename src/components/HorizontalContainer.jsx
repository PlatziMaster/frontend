import React from 'react';

import '../styles/components/HorizontalContainer.styl';


function HorizontalContainer({children}) {
  return( 
   <div className="HorizontalContainer">
     {children}
   </div>
  )
}; 

export default HorizontalContainer; 