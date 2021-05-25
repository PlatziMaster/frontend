import React from 'react';
import '../styles/components/ExperienceCard.styl'

/**
 * ExperienceCard component
 * Props:
 *  -- @param {string} company - Company name related with the experience
 *  -- @param {string} labor - Short description of the experience
 *  -- @param {string} date - Period of the experience
 *  -- @param {string} location - The place related with the experience
 */
const ExperienceCard = ({company, labor, date, location}) => (
  <div className="card-experience">
    <div className="title-card">{company}</div>
    <div className="text-min-card">{date}</div>
    <div className="subtitle-card margin-y-1">{labor}</div>
    <div className="text-min-card">{location}</div>
  </div>
)

export default ExperienceCard;
