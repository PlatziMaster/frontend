import React from 'react'

const InterestItem = ({ data }) => {
  return (
    <>
      <div className="col-md-12" key={data}>
        <div className="card">
          <div className="card-body">
            <h5>{data}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestItem;
