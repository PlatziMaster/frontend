import React from 'react';

const Languages = ({ data }) => {
  const languages = Object.values(data);
  return (
    <div>
      <h2>Idiomas</h2>
      <ul>
        {languages.map(language => (
          <li>
            {language.name}
            {' '}
            {language.percentage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
