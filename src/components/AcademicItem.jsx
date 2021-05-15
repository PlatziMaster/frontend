import React from 'react';
import '../styles/components/AcademicItem.styl';

const AcademicItem = (props) => {
  const data = props.academic.Academic;
  return (
    <>
      {data.map((academic, index) => {
        return (
          <div className="Academic-item shadow-border" key={index}>
            <h3 className="Academic-item__title">{academic.degree}</h3>
            <h5 className="Academic-item__institution">{academic.institution}</h5>
            <p className="Academic-item__decription">{academic.description}</p>
            <div className="Academic-item__dates">
              <div className="Academic-item__date"><b>{academic.startDate} / {academic.endDate}</b></div>
              {/* <div className="Academic-item__date">{academic.endDate}</div> */}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AcademicItem;