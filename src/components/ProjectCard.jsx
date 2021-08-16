import React from "react"

import book from "../assets/icons/bookLogo.png"

import "../styles/components/ProjectCard.css"

const ProjectCard = ({ data }) => (
    <article className="project-card">
        <div className="project-card__header">
            <img src={book} alt="repository logo" />
            <h2>{data.projectTitle}</h2>
        </div>

        <h3>{data.projectDescription}</h3>
        <ul>
            {data.projectContent.map(project => (
                <li key={project.id}>
                    {project.content}
                </li>
            ))}
        </ul>
    </article>
)

export default ProjectCard