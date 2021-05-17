import React from 'react'

export default function Experience({experience}) {
    return (
        <section className="Experience">
            <h2 className="Experience-title">Experience</h2>
            <div className="Experience container">
            {
                experience.map((item, index) => (
                    <div className="Experience-item content" key={index}>
                        <h3>{item.company}</h3>
                        <h4>{item.jobTitle}</h4>
                        <p>{`${item.startDate} - ${item.endDate}`}</p>
                        <p>{item.jobDescription}</p>
                    </div>
                ))
            }
            </div>
        </section>
    )
}
