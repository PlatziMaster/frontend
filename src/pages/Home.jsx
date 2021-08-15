import React from "react"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"

import "../styles/pages/Home.css"

const Home = () => (
  <React.Fragment>
    <Section title="Personal Profile">
      <p>
        I am a front-end web developer with knowledge about Git, Github and the terminal. Besides that, I have a high level of mastery in html, css and JavaScript. Currently I develop all my projects with React.js
      </p>
    </Section>

    <Section title="Skills">
      <div className="skills-content">
        <ul>
          <li>
            <span>Prompt</span>
          </li>
          <li>
            <span>Git & GitHub</span>
          </li>
          <li>
            <span>Html</span>
          </li>
          <li>
            <span>Css</span>
          </li>
          <li>
            <span>Vanilla JavaScript</span>
          </li>
          <li>
            <span>React.js</span>
          </li>
          <li>
            <span>Webpack</span>
          </li>
          <li>
            <span>React Router</span>
          </li>
        </ul>
      </div>
    </Section>

    <Section title="Experience">
      <div className="experience-content">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Section>
  </React.Fragment>
)

export default Home