import React from 'react'

const AcademicItem = ({ data }) => {
  return (
    <>
      <div className="col-md-12" key={data}>
        <div className="card">
          <div className="card-body">
            <div className='row'>
              <div className='col-md-12'>
              <h5>{data.degree}</h5>
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
                <li>{data.description}</li>
              </ul>
            </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
              <p>Institución: {data.institution}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicItem;
