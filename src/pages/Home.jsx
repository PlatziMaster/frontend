import React from "react"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"

import "../styles/pages/Home.css"

const Home = (props) => {
  const { personalProfile, skills, experience } = props.data

  return(
    <React.Fragment>
      <Section title={personalProfile.title}>
        <p>
          {personalProfile.content}
        </p>
      </Section>

      <Section title={skills.title}>
        <div className="skills-content">
          <ul>
            {skills.content.map(item => (
              <li key={item.id}>
                <span>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Experience">
        <div className="experience-content">
          {experience.content.map(card => (
            <ProjectCard data={card} />
          ))}
        </div>
      </Section>
    </React.Fragment>
  )
}
export default Home