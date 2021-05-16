import React from 'react'
import '../styles/components/ExperienceItem.css'

const ExperienceItem = ({ experience }) => {
    return (
        <>
        <section className="Experience-item">
            <p><strong>Company:</strong> {experience.company}</p>
            <p><strong>JobDescription:</strong> {experience.jobDescription}</p>
            <p><strong>JobTitle:</strong> {experience.jobTitle}</p>
            <p><strong>StartDate:</strong> {experience.startDate}</p>
            <div className="Container-img">
                <div className="Box1">
                </div>
                <div className="Box2">
                </div>
            </div>
        </section>               
        </>
    )
}


export default ExperienceItem
