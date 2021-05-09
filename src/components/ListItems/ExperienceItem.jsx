import React from 'react'

const ExperienceItem = ({ data }) => {
  return (
    <>
      <div className="col-md-6" key={data}>
        <div className="card">
          <div className="card-body">
            <div className='row'>
              <div className='col-md-12'>
              <h5>{data.company}</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
            <h6>{data.startDate} hasta {data.endDate}</h6>
              </div>
            </div>
            <br/>
            <div className='row'>
              <div className='col-md-12'>
              <ul>
                <li>{data.jobDescription}</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
