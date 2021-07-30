import React from 'react';
import '../styles/main.css';

const Experience = ({experience}) => {
    return (
        <div>
            <h2 className="experience-card--title cards--title"><span className="pencil-icon"><i className="fa fa-pencil-square" aria-hidden="true"></i>
            </span>WORK EXPERIENCE</h2>
            <section className="experience-card_container">
            {
                
               experience?.map(exp => (
                    <article key={exp.company} className="experience-card__details--container">
                        <div className="experience-card__details--date">
                            <p className="year">{exp.startDate}-{exp.endDate}</p>
                            <p>{exp.location}</p>
                        </div>
                        <div className="experience-card__info--container">
                            <p className="experience-card__info--jobname" >{exp.jobTitle}</p>
                            <p className="experience-card__info--workplace" >{exp.company}</p>
                            <p className="experience-card__info--description" >{exp.jobDescription}
                            </p>
                        </div>
                    </article>
                
                ))
            }
                </section>
            </div>
        )
    }

export default Experience;