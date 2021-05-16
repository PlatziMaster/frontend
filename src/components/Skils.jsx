import React from 'react'
import '../styles/components/Skills.css'

const Skills = (props) => {
    return (
    <div className="Skills">
        <h1>Skills-title</h1>
        { props.skills ?
        
        props.skills.map((skill, index) => {
            return(
                <div key={index} className="Skills-item">
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
    )
}


export default Skills