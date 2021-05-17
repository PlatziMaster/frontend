import React from 'react';
import '../styles/components/Academic.styl';

const Academic = (data) => {
  const { academic } = data;
  return (
    <section className='Academic-container'>
      <h2 className='Academic-title'>Academic</h2>
      <div className='Academic-items-container'>
        { academic &&
          academic.map(item => (
            <div className='Academic-item' key={academic.indexOf(item)}>
              <h3 className='Academic-institution'>{item.institution}<span className='Academic-jobDate'> -- {item.startDate} - {item.endDate}</span></h3>
              <h4 className='Academic-degree'>{item.degree}</h4>
              <p className='Academic-jobDescription'>{item.jobDescription}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Academic;
