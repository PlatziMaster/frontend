import React from 'react';
import '../styles/main.css';

const Skills = ({skills}) => {
    return (
            <section className="skills-card_container">
                    <h2 className="skill-card--title cards--title">
                        <span className="skill-icon">
                        <i className="fa fa-laptop" aria-hidden="true">
                        </i>
                        </span>SKILLS
                    </h2>
                    <div className="skill-list_container">
                <div className="skill-list--one">
                {
                
                skills?.map(skl => (
                    <div key={skl.name} className="skill-list--item">
                    <p>{skl.name}</p>
                        <div  className="progress-bar" >
                            <div ></div>
                        </div>
                    </div>
                 
                 ))
                }
                        </div>
                            
                        </div>
                    </section>
        )
    }

export default Skills;