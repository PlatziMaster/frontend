import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages = [] }) => {
  const list = languages.map(item => (
    <li className='Languages-item' key={item.name}>
      <span>{ item.name }</span>
      <div className='long-line'>-</div>
    </li>
  ));
  return (
    <div className='Languages'>
      <span className='Languages-title'>LANGUAGES</span>
      <div className='short-line'>_</div>
      <ul>
        { languages.length ? list : <p>No data</p>}
      </ul>
    </div>
  );
};

export default Languages;
