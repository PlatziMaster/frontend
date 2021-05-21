import React from 'react'

import '../styles/components/SoftSkills.styl'

const SoftSkills = ({ softSkills }) => {
    return(
        <div className="soft-skills__container">
            <h2 className="soft-skills__title">Habilidades Blandas</h2>
            <ul className='soft-skills__unordered-list'>
                {
                softSkills.map(item =>
                <li
                    key={softSkills.indexOf(item)}
                >
                    {item}
                </li>)
                }
            </ul>
        </div>
    )
}

export default SoftSkills