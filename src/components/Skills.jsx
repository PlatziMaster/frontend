import React from "react";

const Skills = ({ data }) => {
    const skills = data.skills;
    return (
        <div className='nes-container is-rounded'>
            <h2>Skills</h2>
            <ul>
                {skills?.map(({ name, percentage }) => (
                   <li key={name}>
                       <h3 >{name}</h3>
                       <progress className="nes-progress" value={percentage} max="100"></progress>
                   </li>
                ))}
            </ul>
        </div>
    );

};

export default Skills;