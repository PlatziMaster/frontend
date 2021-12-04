import React from 'react';
import '../styles/components/Certificates.styl';
import Title from './Title';
import Subtitle from './Subtitle';

const Certificates = ({ data }) => (
  <div className="Certificates">
    <div className="Certificates-title">
      <Title title="Certificates" />
    </div>
    <div className="Certificates-items">
      {
        data && data.map(item => (
          <div className="Certificates-item" key={item.name}>
            <Subtitle title={item.name} />
            <h3>{item.institution}</h3>
            <p className="Certificates-item-Dates">{item.date}</p>
            <p>{item.description}</p>
            <div className="Certificates-item-button">
              <a href={item.url}>Check it out!</a>
            </div>
          </div>
        ))
      }
      {/* <div className="Certificates-item">
        <Subtitle title="Web Developer" />
        <h3>Instituto Tecnológico de Conkal</h3>
        <p className="Certificates-item-Dates">Apr 2021 - Jun 2021</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.andnad dapnda dandaodnad dadoaid</p>
        <div className="Certificates-item-button">
          <a href="http://protected-fjord-95661.herokuapp.com/home">Check it out!</a>
        </div>
      </div>
      <div className="Certificates-item">
        <Subtitle title="Participant As A Video Game Web Developer" />
        <h3>Js13kGames</h3>
        <p className="Certificates-item-Dates">Aug 2020 - Sept 2020</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vero cupiditate soluta. Illo quasi obcaecati nam dolore dolorum.</p>
        <div className="Certificates-item-button">
          <a href="https://js13kgames.com/entries/logic-shooter">Check it out!</a>
        </div>
      </div>
      <div className="Certificates-item">
        <Subtitle title="Mathematics Teaching Assistant" />
        <h3>Centro de Matemáticas Kumon</h3>
        <p className="Certificates-item-Dates">Jul 2015 - Jun 2020</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet vero nobis laboriosam dolore excepturi cum earum labore. Eos explicabo eveniet sequi eligendi atque temporibus animi.</p>
        <div className="Certificates-item-button">
          <a href="https://www.kumon.com/how-kumon-works">Check it out!</a>
        </div>
      </div> */}
    </div>
  </div>
);

export default Certificates;
