import React from 'react'
import Card from './Card'
import '../styles/components/PercentageList.styl'

const Languages = ({ languages }) => {
  return(
    <Card title='Languages' className='Languages-title'>
      <ul className='Percentage-list'>
        {languages.map(language => <li
          key={languages.indexOf(language)}
          className='Languages-item'
        >
          <span>
            {language.name}
          </span>
          <span>
            {language.percentage}
          </span>
        </li>)}
      </ul>
    </Card>
  )
}

export default Languages