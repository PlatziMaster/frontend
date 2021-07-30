import React from 'react';
import '../styles/main.css';


const Interest = () => {
    return (
            <section className="interest-card_container">
                    <h2 className="interest-card--title cards--title">INTERESTS & EXPERTISE</h2>
                    <div className="interest-card__icon--container">
                        <div className="music-icon interest--item">
                            <i className="fa fa-headphones" aria-hidden="true"></i>
                        </div>
                        <div className="sports-icon interest--item">
                            <i className="fa fa-futbol-o" aria-hidden="true"></i>
                        </div>
                        <div className="travel-icon interest--item">
                            <i className="fa fa-plane" aria-hidden="true"></i>
                        </div>
                        <div className="exercise-icon interest--item">
                            <i className="fa fa-bicycle" aria-hidden="true"></i>
                        </div>
                        <div className="picture-icon interest--item">
                            <i className="fa fa-camera-retro" aria-hidden="true"></i>
                        </div>
                    </div>
    
            </section>
        )
    }

export default Interest;
