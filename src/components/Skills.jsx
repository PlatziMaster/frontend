import React from 'react';

const Skills = () => {
  return (
    <div className='Skill-container main'>
      <div className='Skill'>
        <div className='Skill-name'>
          HTML
          <span className='percentage'>85%</span>
        </div>
        <div className='Skill-bar'>
          <div className='Skill__bar__progress__html' />
        </div>
      </div>
      <div className='Skill'>
        <div className='Skill-name'>
          CSS
          <span className='percentage'>65%</span>
        </div>
        <div className='Skill-bar'>
          <div className='Skill__bar__progress__css' />
        </div>
      </div>
      <div className='Skill'>
        <div className='Skill-name'>
          Flutter / Dart
          <span className='percentage'>60%</span>
        </div>
        <div className='Skill-bar'>
          <div className='Skill__bar__progress__flutter' />
        </div>
      </div>
      <div className='Skill'>
        <div className='Skill-name'>
          Java Script
          <span className='percentage'>40%</span>
        </div>
        <div className='Skill-bar'>
          <div className='Skill__bar__progress__javascript' />
        </div>
      </div>
      <div className='Skill'>
        <div className='Skill-name'>
          ReactJS
          <span className='percentage'>30%</span>
        </div>
        <div className='Skill-bar'>
          <div className='Skill__bar__progress__react' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
