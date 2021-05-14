import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  return (
    <section className='Skills card'>
      <h2 className='Skills-title grid'>Skills</h2>
      <ul className='Skills-list grid'>
        {skills?.map(item => (
          <li key={item.name} className='Skills-item grid'>
            <p><strong>{item?.name || 'Skill title'}</strong></p>
            <div className='flex'>
              {[20, 40, 60, 80, 100].map(percentage => (
                <span key={percentage} className={`dot ${parseInt(item.percentage, 10) >= percentage ? 'complete' : ''}`} />
              ))}
            </div>
          </li>
        ))}

        {(!skills || skills.length <= 0) && (
          <>
            <li className='Skills-item'>Skills example</li>
            <li className='Skills-item'>Skills example</li>
            <li className='Skills-item'>Skills example</li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Skills;
