import React from "react";

const Skills = function ({ skills }) {
  return (
    <section className="skills-card_container">
      <h2 className="cards--title .skill-card--title">
        <span className="skill-icon">
          <i className="fa fa-laptop" aria-hidden="true" />
        </span>
        SKILLS
      </h2>
      <div className="skill-list_container">
        <div className="skill-list--one">
          {skills?.map((skl) => (
            <div key={skl.name} className="skill-list--item">
              <p>{skl.name}</p>
              <div className="progress-bar">
                <div
                  style={{
                    width: `${skl.percentage}px`,
                    backgroundColor: `${skl.bgcolor}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
