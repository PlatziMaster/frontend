import React, { useEffect, useState } from 'react';

const SkillsItem = ({ data }) => {
  return (
    <>
      <div className="col-md-12" key={data}>
        <div className="card">
          <div className="card-header">{data.name}</div>
          <div className="card-body">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: data.percentage }}
                aria-valuenow={`${data.percentage}`}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsItem;
