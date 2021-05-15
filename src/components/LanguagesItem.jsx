import React from 'react';
import '../styles/components/LanguagesItem.styl';

const LanguageItem = (props) => {
  const data = props.languages.languages;
  return (
    <>
      {data.map((language, index) => {
        return (
          <div className="Language-item" key={index}>
            <h3 className="Language-item-title">{language.name}</h3>
            <div className="Language-item-percentage shadow-border">{language.percentage}</div>
          </div>
        );
      })}
    </>
  );
}

export default LanguageItem;