import React from 'react';
import '../styles/components/SkillsCard.styl'

/**
 * SkillsCard component
 * Props:
 * @param {string} type - Type or name of the skill (main skill)
 * @param {array} items - List of the specific skills ralated with the main skill
 */
const SkillsCard = ({type, items}) => (
  <div className="card-skills">
    <div className="title-card">{type}</div>
    {items?.length > 0 && (
      <ul className="lists margin-y-1">
        {items.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    )}
  </div>
)

export default SkillsCard;
