import React from 'react';
import '../styles/components/LanguagesCard.styl'

/**
 * LanguagesCard component
 * Props:
 * @param {string} language - Name of the language
 * @param {string} level - Level related with the language
 */
const LanguagesCard = ({language, level}) => (
  <div className="card-languages">
    <div className="title-card">{language}</div>
    <div className="subtitle-card margin-y-1">{level}</div>
  </div>
)

export default LanguagesCard;
