import React from 'react';
import Tile from './Tile';
import '../styles/components/Languages.css'
import SkillPercent from './SkillPercent';



const Languages = ({languages})=>{
    return(
        <Tile
            title="Languages"
            color="blue"
            align="left"
        >
            <ul className="Languages__body">
                {
                languages.map(lang =>{
                    return<SkillPercent
                    key={lang.percentage}
                    color="yellow"
                    name={lang.name}
                    percentage={lang.percentage}
                />
            })
                }
            </ul>

        </Tile>
    )
}

export default Languages;