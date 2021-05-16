import React from 'react'
import '../styles/components/AcademicItem.css'

const AcademicItem = ({item}) => {
    return (
        <>
        <article className="AcademicItem">
            <h1><strong>Degree:</strong>{item.degree}</h1>
            <p><strong>Description:</strong>{item.description}</p>
            <p><strong>StartDate:</strong>{item.startDate}</p>
            <p><strong>EndDate:</strong>{item.endDate}</p>
            <p><strong>Institution:</strong>{item.institution}</p>
        </article>
        </>
    )
}


export default AcademicItem