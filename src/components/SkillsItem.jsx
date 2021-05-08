import React, { Fragment } from 'react'

const SkillsItem = (prop) => {
    return(
        <tr className='Skills-item'>
            <td className="skill-table__left">
                <h3>{prop.name}</h3>
            </td>
            <td className="skill-table__right">
                <p>{prop.percentage}</p>
            </td>
        </tr>
    )
}

export default SkillsItem