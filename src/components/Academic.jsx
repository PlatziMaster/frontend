import React from 'react';
import '../styles/components/Academic.styl';
import Title from './Title';
import Subtitle from './Subtitle';

const Academic = ({ data }) => (
  <div className="Academic">
    <div className="Academic-title">
      <Title title="Academic" />
    </div>
    <div className="Academic-items">
      {
        data && data.map(item => (
          <div className="Academic-item" key={item.degree}>
            <Subtitle title={item.degree} />
            <h3>{item.institution}</h3>
            <p className="Academic-item-Dates">{item.startDate} - {item.endDate}</p>
            <p>{item.description}</p>
          </div>
        ))
      }
      {/* <div className="Academic-item">
        <Subtitle title="Web Development" />
        <h3>Platzi</h3>
        <p className="Academic-item-Dates">Jan 2020 - Present</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, cum! Laborum error ut culpa, qui quo placeat laudantium doloremque asperiores fugiat minus nesciunt illo cumque recusandae? Sequi iste quam ipsam?</p>
      </div>
      <div className="Academic-item">
        <Subtitle title="Information Technology and Communications Engineering" />
        <h3>Instituto Tecnológico de Conkal</h3>
        <p className="Academic-item-Dates">Aug 2018 - Present</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, cum! Laborum error ut culpa, qui quo placeat laudantium doloremque asperiores fugiat minus nesciunt illo cumque recusandae? Sequi iste quam ipsam?</p>
      </div>
      <div className="Academic-item">
        <Subtitle title="Math Program" />
        <h3>Centro Matemáticas Kumon</h3>
        <p className="Academic-item-Dates">May 2014 - Jan 2018</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, cum! Laborum error ut culpa, qui quo placeat laudantium doloremque asperiores fugiat minus nesciunt illo cumque recusandae? Sequi iste quam ipsam?</p>
      </div> */}
    </div>
  </div>
);

export default Academic;
