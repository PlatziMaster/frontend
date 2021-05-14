import React from 'react';
import Tile from './Tile';
import '../styles/components/Languages.css'
import SkillPercent from './SkillPercent';



const Languages = ()=>{
    return(
        <Tile
            title="Languages"
            color="blue"
            align="left"
        >
            <ul className="Languages__body">
            
                <SkillPercent
                    color="yellow"
                    name="Español"
                    percentage="100%"
                />
                <SkillPercent
                    color="yellow"
                    name="Español"
                    percentage="100%"
                />
                <SkillPercent
                    color="yellow"
                    name="Español"
                    percentage="100%"
                />
                
            </ul>

        </Tile>
    )
}

export default Languages;