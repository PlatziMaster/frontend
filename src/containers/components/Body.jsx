import React from 'react';
import '../../assets/styles/components/Body.css'
const Body = ({ children, title }) => (
<div className="body">
     <h3 className="body__title">{title}</h3>
     {children}
</div>
);

export default Body;