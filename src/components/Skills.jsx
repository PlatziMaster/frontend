import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/skills.css';
import { getAllData } from '../utils/getData';
import { makeKey } from '../utils/makeKey';
const Skills = () => {
  const [skillsInfo, setSkillsInfo] = useState();
  const { skills } = skillsInfo || [];
  useEffect(() => {
    getAllData().then(res => setSkillsInfo(res));
  }, []);
  return (
    <div className="skills_container">
      <h2>Skills</h2>
      <div className="skills_info">
        {skills?.map(item => (
          <div key={makeKey()} className="skill">
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

export default Skills;
