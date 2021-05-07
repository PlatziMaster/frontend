import React from 'react';
import '../styles/components/SkillsItem.scss';

const SkillsItem = (data) => {
    let mystyle = "skills-item-bottom";
    
    if(data.index%2==0)
        mystyle = "skills-item-top";

    return (
        <div className={mystyle}>
            <div className="skills-item__details">
                <p className="skills-item__details--title">{data.name}</p>
                <ul className="skills-item__details--list">
                    <li>{data.percentage}</li>
                </ul>
            </div>
        </div>
    );
}
export default SkillsItem;