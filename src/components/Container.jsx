import React from 'react';

import '../styles/components/Container.styl';


function Container({children}) {
  return( 
   <div className="Container">
     {children}
   </div>
  )
}; 

export default Container; 