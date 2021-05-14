import React from 'react';
import SkillPercent from './SkillPercent';
import '../styles/components/Skills.css';

import Tile from './Tile';


const Skills = ()=>{
    return(
        <Tile
        title="Skills"
        color="red"
        align="left"
        >
            <ul className="Skills__body">
            
            <SkillPercent
                color="white"
                name="React"
                percentage="50%"
            />
            <SkillPercent
                color="white"
                name="React"
                percentage="50%"
            />
            <SkillPercent
                color="white"
                name="React"
                percentage="50%"
            />
            
            
            </ul>
        </Tile>
    )
}

export default Skills