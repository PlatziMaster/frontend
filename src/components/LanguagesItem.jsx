import React from 'react'

const LanguagesItem = (props) =>{
    return(
        <tr className='Languages-item'>
            <td className="languages-table__left">
                <p>{props.name}</p>
            </td>
            <td className="languages-table__right">
                <p>{props.percentage}</p>
            </td>
        </tr>
    )
}
export default LanguagesItem