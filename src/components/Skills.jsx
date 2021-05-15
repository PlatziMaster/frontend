import React from 'react';
import '../styles/components/Skills.css';

const Skills = ({ skills }) => (
	<div className="skills">
		<h4>Skills:</h4>
        <div>
        {skills.map(item =>{
            return (
                <div className="skills-list">
                    <ol>
                        <ul><span>{item.name}:</span> {item.percentage}</ul>
                    </ol>
                </div>
            );
        })};
        </div>
	</div>
);
export default Skills;