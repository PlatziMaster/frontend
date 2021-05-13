import React from 'react';

const SkillPercent = ({name, percentage})=>{
    return(
        <li className="SkillPercent">
            <div className="SkillPercent_key">{name}</div>
            <div className="SkillPercent_key">{percentage}</div>
        </li>
    )
}


export default SkillPercent