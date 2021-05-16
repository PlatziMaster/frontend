import React from 'react'
import '../styles/components/Skills.css'

const Skills = ({ skills }) => {
    return (
    <div className="Skills">
        <h1 className="Skills-title">Skills</h1>
        <div className="Skills-container">
            {skills ?
                skills.map((skill, index) => {
                    return(
                        <div key={index} className="Skill-item">
                            <p>{skill.name} ({skill.percentage})</p>
                            <div className="percentage">
                                <div className="percentage-bar"></div>
                            </div>
                        </div>
                    )
                }) :
                <h1>cargando...</h1>
            }
        </div>
    </div>
    )
}


export default Skills