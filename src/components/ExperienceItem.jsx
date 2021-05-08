import React from 'react'

const ExperienceItem = (props) =>{
    return(
        <tr className='Experience-item'>
            <td className='table__left'>
                <p>{props.date}</p>
            </td>
                <td className='table__right'>
                    <h3>{props.institution}</h3>
                    <h4>{props.name}</h4>
                    {
                        typeof(props.description) === "string" ? 
                                                <p>{props.description}</p> :
                                                props.description.map((descrip,index) =>
                                                                (<p key={index}>{descrip}</p>))
                    }
                </td>
        </tr>
    )
}
export default ExperienceItem