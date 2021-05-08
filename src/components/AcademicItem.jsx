import React from 'react'

const AcademicItem = (prop) =>{
    return(
        <tr className='Academic-item'>
            <td className="academic_table__left">
                <p>{prop.endDate}<br/>{prop.startDate}</p>
            </td>
                <td className="academic_table__right">
                <h3>{prop.degree}</h3>
                <h4>{prop.institution}</h4>
            </td>
        </tr>
    )
}
export default AcademicItem