import React from 'react';
import SkillPercent from './SkillPercent';
import '../styles/components/Skills.css';

import Tile from './Tile';


const Skills = ({skills})=>{
    return(
        <Tile
        title="Skills"
        color="red"
        align="left"
        >
            <ul className="Skills__body">
                {
                    skills.map(skill=>{
                        return <SkillPercent
                        color="white"
                        key={skill.percentage}
                        name={skill.name}
                        percentage={skill.percentage}
                    />
                    })
                }            
            </ul>
        </Tile>
    )
}

export default Skills