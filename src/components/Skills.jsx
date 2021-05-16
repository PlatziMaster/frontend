import React from 'react';

const Skills = (props) => {
  const { skill } = props;

  return (
    <>
      <section className='Main-skills'>
        <h2 className='Skills-title'>Skills</h2>
        <div className='Skills-container'>
          {
            skill &&
              skill.map((element) => {
                const { name } = element;
                return (
                  <article key={name} className='Skills-item'>
                    <h4>Skill:</h4>
                    <p>{element.name}</p>
                    <h4>Percentage:</h4>
                    <p>{element.percentage}</p>
                  </article>
                );
              })
          }
        </div>
      </section>
    </>
  );
};

export default Skills;
