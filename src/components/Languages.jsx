import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  return (
    <section className='Languages card'>
      <h2 className='Languages-title'>Languages</h2>
      <ul className='Languages-list grid'>
        {languages?.map(item => (
          <li key={item.name} className='Languages-item grid'>
            <p>{item?.name || 'Title'}</p>
            {/* <p>{item.percentage}</p> */}
            <div className='flex'>
              {[20, 40, 60, 80, 100].map(percentage => (
                <span key={percentage} className={`dot ${parseInt(item.percentage, 10) >= percentage ? 'complete' : ''}`} />
              ))}
            </div>
          </li>
        ))}

        {(!languages || languages.length <= 0) && (
          <>
            <li className='Languages-item'>Language example</li>
            <li className='Languages-item'>Language example</li>
            <li className='Languages-item'>Language example</li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Languages;
