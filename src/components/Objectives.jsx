import React from 'react';
import '../styles/components/Objectives.styl'

const Objectives = ({ objectives }) => {
  return (
    <div className="objectives__container">
      <h2 className='objectives__title'>Objetivos</h2>
      <ul className='objectives__info'>
        {
          objectives.map(item =>
          <li
            key={objectives.indexOf(item)}
          >
            {item}
          </li>)
        }
      </ul>
    </div>
  )
}

export default Objectives