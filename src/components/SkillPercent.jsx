import React from 'react';
import '../styles/components/SkillPercent.css';

const SkillPercent = ({name, percentage, color})=>{
    return(
        <li className={`SkillPercent SkillPercent--${color} Skills-item Languages-item`}>
            <div className="SkillPercent_key">{name}</div>
            <div className="SkillPercent_value">{percentage}</div>
        </li>
    )
}


export default SkillPercent