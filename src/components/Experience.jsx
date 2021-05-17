import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = ({experience, title}) => {
    return (
        <>
            <div className="card mx-3 mt-1 ">
                <div className="card-header bg-info text-white">
                    {title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Work Experience</h5>
                    <div className="card-text">{experience.map((xpe, index) => (
                        <ExperienceItem 
                            key={index}
                            startDate={xpe.startDate}
                            endDate={xpe.endDate}
                            company={xpe.company}
                            jobTitle={xpe.jobTitle}
                            jobDescription={xpe.jobDescription}
                            url={xpe.url}
                            image={xpe.image}
                        />                        
                    ))}</div>

                </div>
            </div>            
        </>
    )
}

export default Experience
