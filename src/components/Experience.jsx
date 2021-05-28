import React from 'react';
import '../styles/components/Experience.css'

const Experience = ({ experience }) => {
  return (
    <section>
      <div className=" experience">
        <ol className="jobs">
          <h2 className="title-main">Experience</h2>

          {
            experience.map(exp => (
              <li key={exp.company} className="job__container">
                <h3 className="experience__title-job">{exp.jobTitle}</h3>
                <p className="p-1">{exp.company} | {exp.startDate} - {exp.endDate}</p>
                <p className="p-1">{exp.jobDescription}</p>
              </li>
            ))
          }

        </ol>
      </div>
    </section>
  )
}

export default Experience