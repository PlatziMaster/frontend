import React from 'react'
import '../styles/components/ExperienceItem.css'

const ExperienceItem = ({item}) => {
    return (
        <>
        <section className="Experience-Item">
            <p><strong>Company:</strong> {item.company}</p>
            <p><strong>JobDescription:</strong> {item.jobDescription}</p>
            <p><strong>JobTitle:</strong> {item.jobTitle}</p>
            <p><strong>StartDate:</strong> {item.startDate}</p>
            <div className="container-father">
                <div className="box1">
                </div>
                <div className="box2">
                </div>
            </div>
        </section>               
        </>
    )
}


export default ExperienceItem
