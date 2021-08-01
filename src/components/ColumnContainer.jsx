import React from 'react';

import '../styles/components/ColumnContainer.styl';


function ColumnContainer({children}) {
  return( 
   <div className="ColumnContainer">
     {children}
   </div>
  )
}; 

export default ColumnContainer; 