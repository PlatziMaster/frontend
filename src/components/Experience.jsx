import React from 'react';
import '../styles/components/Experience.styl';
import Title from './Title';
import Subtitle from './Subtitle';

const Experience = () => (
  <div className="Experience">
    <div className="Experience-title">
      <Title title="Experience" />
    </div>
    <div className="Experience-items">
      <div className="Experience-item">
        <Subtitle title="Participant As A Video Game Web Developer" />
        <h3>Js13kGames</h3>
        <p className="Experience-item-Dates">Aug 2020 - Sept 2020</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vero cupiditate soluta. Illo quasi obcaecati nam dolore dolorum.</p>
        <div className="Experience-item-button">
          <a href="https://js13kgames.com/entries/logic-shooter">Check it out!</a>
        </div>
      </div>
      <div className="Experience-item">
        <Subtitle title="Mathematics Teaching Assistant" />
        <h3>Centro de Matemáticas Kumon</h3>
        <p className="Experience-item-Dates">Jul 2015 - Jun 2020</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet vero nobis laboriosam dolore excepturi cum earum labore. Eos explicabo eveniet sequi eligendi atque temporibus animi.</p>
        <div className="Experience-item-button">
          <a href="https://www.kumon.com/how-kumon-works">Check it out!</a>
        </div>
      </div>
      <div className="Experience-item">
        <Subtitle title="Experience Item" />
        <h3>Lorem ipsum dolor sit amet</h3>
        <p className="Experience-item-Dates">Jul 2015 - Jun 2020</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente quod, tenetur eveniet nobis ipsum id voluptates sed eos autem asperiores alias, quae vero sunt labore? Maxime ipsa autem quos?</p>
        <div className="Experience-item-button">
          <a href="https://platzi.com/home">Check it out!</a>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
