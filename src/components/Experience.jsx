import React from 'react';


const Experience = ({ experience }) => {
    return (
        <section className="Experience">
            <h1 className="Experience-title">Experience</h1>
            <section className="Experience-itemContainer">
                {experience ?
                    experience.map((item, index) => (
                        <article className="Experience-item" key={index.toString()}>
                            <p><span>Company:</span> {item.company}</p>
                            <p><span>EndDate:</span> {item.endDate}</p>
                            <p><span>JobDescription:</span> {item.jobDescription}</p>
                            <p><span>JobTitle</span> {item.jobTitle}</p>
                            <p><span>startDate</span> {item.startDate}</p>
                        </article>
                    )) :
                    <div>Cargando</div>

                }        
            </section>
        </section>
    )
}

export default Experience