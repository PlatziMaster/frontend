import React from 'react';
import '../styles/components/Languages.styl';

const Languages = (props) => {
    const { languages } = props;
  return (
    <div className="box">
      <div className="information">
        <strong>
          <h1 className="title is-4">Languages</h1>
        </strong>
      </div>
      {languages &&
          languages.map(element => {
            const { id } = element;
            return (
              <div key={id} className="mt-3">
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
  );
};

export default Languages;
