import React, { useEffect, useState } from 'react';
import { getAllData } from '../utils/getData';
import '../styles/components/experience.css';
import { ExperienceCart } from './ExperienceCart';
import { makeKey } from '../utils/makeKey';

const Experience = () => {
  const [experienceInfo, setExperienceInfo] = useState();
  const { experience } = experienceInfo || [];
  
  useEffect(() => {
    getAllData().then(res => setExperienceInfo(res));
  }, []);



  return (
    <div className="experience_container">
        <h2>Experience</h2>
        <div className="experience_info">
            {experience?.map(item=>(
                <ExperienceCart
                key={makeKey()}
                Job={item.jobTitle}
                Company={item.company}
                Description={item.jobDescription}
                StartDay={item.startDate}
                EndDay={item.endDate}            
                />
            ))}
         </div>
    </div>
  );
};

export default Experience;
