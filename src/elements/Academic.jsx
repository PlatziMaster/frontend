import React from 'react';
import { MdSchool } from 'react-icons/md';

const Academic = ({ academic }) => {
  return (
    <div className='box academic'>
      <div className='flex align-items-center gap-2'>
        <MdSchool color='#588B8B' />
        <div className='title'>Estudios</div>
      </div>
      <div className='academic-info-container'>
        {academic &&
          academic.length > 0 &&
          academic.map((element) => {
            return (
              <div key={element.institution} className='academic-element'>
                <div className='title-academic'>
                  {element.institution}
                  .
                  {' '}
                  {element.location}
                </div>
                <div>
                  {element.degree}
                  .
                  {' '}
                  {element.startDate && `${element.startDate} -`}
                  {' '}
                  {element.endDate}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Academic;
