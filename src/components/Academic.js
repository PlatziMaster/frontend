import React from 'react';
import '../styles/main.css';

const Academic = ({academic}) => {
    return (
        <div>
            <h2 className="education-card--title cards--title"><span className="book-icon ">
                        <i className="fa fa-book" aria-hidden="true"></i>
                    </span>EDUCATION</h2>
                <section className=" education-card_container">
                    
                    {
                
                academic?.map(aca => (
                    <article key={aca.degree} className="education-card__details--container">
                    <div className="education-card__details--date">
                        <p className="year">{aca.startDate}-{aca.endDate}</p>
                        <p>{aca.location}</p>
                    </div>
                    <div className="education-card__info--container">
                    <p className="education-card__info--college" >{aca.institution}</p>
                    <p className="education-card__info--degree" >{aca.degree}</p>
                </div>
                </article>
                 
                 ))
             }
        </section>
        </div>
        )
    }


export default Academic;