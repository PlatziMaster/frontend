import React from 'react';
import '../styles/components/SkillsItem.styl';

const SkillsItem = (props) => {
  const data = props.skills.skills;
  return (
    <>
      {data.map((skill, index) => {
        return (
          <div className="Skills-item shadow-border" key={index}>
            <h4 className="Skills-item__title shadow-border">{skill.name}</h4>
            <div className="Skills-item__percentage shadow-border">{skill.percentage}</div>
          </div>
        );
      })
      }
    </>
  );
}

export default SkillsItem;