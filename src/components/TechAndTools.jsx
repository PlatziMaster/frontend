import React from 'react';
import '../styles/components/TechAndTools.styl'

const TechAndTools = ({ skills }) => {
  return (
    <div className="techAndTools__container">
      <h2 className='title'>Tecnologías y herramientas</h2>
      <ul className='techAndTools__info'>
        {
          skills.map(item =>
          <li
            key={skills.indexOf(item)}
          >
            <img className="techAndTools__icon" src={item.icon} alt='social icon'/>
            {`${item.name}: `}<strong> {item.percentage}</strong>
          </li>)
        }
      </ul>
    </div>
  )
}

export default TechAndTools