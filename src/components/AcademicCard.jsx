import React from 'react';
import '../styles/components/AcademicCard.styl'

/**
 * AcademicCard component
 * Props:
 *  -- @param {string} title - Academic title
 *  -- @param {string} institution - Institution related with the academic title
 *  -- @param {string} type - Type of the academic title
 *  -- @param {string} location - The place related with the academic info
 */
const AcademicCard = ({title, institution, type, location}) => (
  <div className="card-academic">
    <div className="title-card">{title}</div>
    <div className="text-min-card">{type}</div>
    <div className="subtitle-card margin-y-1">{institution}</div>
    <div className="text-min-card">{location}</div>
  </div>
)

export default AcademicCard;
