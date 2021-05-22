import React from 'react';
import '../styles/components/Skills.styl';

const Skills = props => {
  const { skills } = props;

  return (
    <div className="box">
      <div className="information">
        <strong>
          <h1 className="title is-4">Skills</h1>
        </strong>
      </div>

      <div className="mt-3">
        {skills &&
          skills.map(element => {
            const { id } = element;
            return (
              <div key={id}>
                <strong>
                  <h1>
                    <p>
                      {element.name}{' '}
                      <strong className="porcentaje">
                        {element.percentage}
                      </strong>
                      %
                    </p>
                  </h1>
                </strong>
                <progress
                  className="progress is-info"
                  value={element.percentage}
                  max="100"
                >
                  {element.percentage}
                </progress>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
