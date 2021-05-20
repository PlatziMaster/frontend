import React from 'react';

const Skill_Item = ({skills}) => {

    const {name, percentage} = skills;

    return (
        <div className="skill-item">
            <label >{name}</label>
            <div>
                <progress id="skill-per" max="100" value={percentage}>{percentage}</progress>
                <span>{percentage}%</span>
            </div>
        </div>
    );
}

export default Skill_Item;