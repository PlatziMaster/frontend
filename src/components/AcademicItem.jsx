import React from 'react'
import '../styles/components/AcademicItem.css'

const AcademicItem = ({ academic }) => {
    return (
        <>
        <article className="Academic-item">
            <h1><strong>Degree:</strong>{academic.degree}</h1>
            <p><strong>Description:</strong>{academic.description}</p>
            <p><strong>StartDate:</strong>{academic.startDate}</p>
            <p><strong>EndDate:</strong>{academic.endDate}</p>
            <p><strong>Institution:</strong>{academic.institution}</p>
        </article>
        </>
    )
}


export default AcademicItem