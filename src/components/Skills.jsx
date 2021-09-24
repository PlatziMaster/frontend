import React from 'react';
import { FaHtml5, FaCss3, FaJsSquare, FaSass, FaReact } from 'react-icons/fa';
import { SiStylus } from 'react-icons/si';

export const Skills = () => {
  return (
    <div className='skills-container'>
      <h2 className='Skills-title'>Skills</h2>
      <p className='Skills-item'>
        Technologies frontend:
        <div className='Skills-item-icons'>
          <i>
            <FaHtml5 />
          </i>
          <i>
            <FaCss3 />
          </i>
          <i>
            <FaJsSquare />
          </i>
        </div>
      </p>
      <p className='Skills-item'>
        Preprocessors:
        <div className='Skills-item-icons'>
          <i>
            <FaSass />
          </i>
          <i>
            <SiStylus />
          </i>
        </div>
      </p>
      <p className='Skills-item'>
        Frameworks and Libraries:
        <div className='Skills-item-icons'>
          <i>
            <FaReact />
          </i>
        </div>
      </p>
    </div>
  );
};
