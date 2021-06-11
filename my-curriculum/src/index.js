// const element = document.createElement('h1')
// element.innerText='Hello platzi badges!'

// const container= document.getElementById('App')

// container.appendChild(element)

import  React from 'react';
import ReactDOM from 'react-dom';
import Model from './components/bloques';



const container = document.getElementById('App');

ReactDOM.render(<Model/>, container);