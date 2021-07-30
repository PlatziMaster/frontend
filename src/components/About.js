import React from 'react';
import '../styles/main.css';

const About = (props) => {
        return (
            <div>
                <section className="profile-info-detail">
                    <img src={props.avatar} className="profile--image">
                    </img>
                    <h1 className="profile--title">{props.firstname}<br /> <span className="profile--lastname" >{props.lastname}</span></h1>
                <h3 className="profile--second-title"> {props.profession}</h3>
                </section>

                <section className="personal-info-detail">
                <h2 className="personal-info--title">INFO</h2>
                <div className="personal-cards--container">
                    <article className="personal-detail--card">
                        <span className="name-icon">
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        </span>
                        <div className="personal--card_data">
                        <p className="data--title">Name</p>
                        <p><i>{props.firstname} {props.lastname}</i></p>
                        </div>
                    </article>

                    <article className="personal-detail--card">
                        <span className="location-icon">
                            <i className="fa fa-location-arrow" aria-hidden="true"></i>
                        </span>
                        <div className="personal--card_data">
                        <p className="data--title">Location</p>
                        <p><i>{props.address}</i></p>
                        </div>
                    </article>

                    <article className="personal-detail--card">
                        <span className="phone-icon">
                            <i className="fa fa-phone-square" aria-hidden="true"></i>
                        </span>
                        <div className="personal--card_data">
                        <p className="data--title">Phone</p>
                        <p><i>{props.phone}</i></p>
                        </div>
                    </article>

                    <article className="personal-detail--card">
                        <span className="email-icon">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        </span>
                        <div className="personal--card_data">
                        <p className="data--title">Email</p>
                        <p><i>{props.email}</i></p>
                        </div>
                        </article>
                    </div>
                </section>
                </div>
        
        )
    }

export default About;