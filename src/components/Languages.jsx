import React, { useEffect, useState } from 'react';
import { getAllData } from '../utils/getData';
import '../styles/components/lenguages.css';

const Languages = () => {
  const [languagesInfo, setLanguagesInfo] = useState();
  const { languages } = languagesInfo || [];
  useEffect(() => {
    getAllData().then(res => setLanguagesInfo(res));
  }, []);
  return (
    <div className="languages_container">
      <h2>Languages</h2>
      <div className="languages_info">
        {languages?.map(item => (
          <div key={item.id} className="skill">
            <div
              id={item.name}
              className="skill_bar"
              style={{ width: item.percentage }}
            >
              <p> {item.name}</p>
              {item.percentage}
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Languages;
