import React from "react"

import book from "../assets/icons/bookLogo.png"

import "../styles/components/ProjectCard.css"

const ProjectCard = () => (
    <article className="project-card">
        <div className="project-card__header">
            <img src={book} alt="repository logo" />
            <h2>Pacman-Remastered</h2>
        </div>

        <h3>The classic Arcade Game made with plain JavaScript</h3>
        <ul>
            <li>Creation of 'smart' characters in order to make the game tricky</li>
            <li>Interaction between 2 or more characters in the same place</li>
            <li>Advanced JavaScript applications</li>
            <li>Movement effects with css</li>
        </ul>
    </article>
)

export default ProjectCard