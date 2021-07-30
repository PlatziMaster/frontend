import React from 'react';
import '../styles/main.css';


const Social = () => {
    return (
        <section className="social-info-detail">
                <h2 className="social-info--title">SOCIAL</h2>
        <div className="social-cards--container">
                    <article className="social-detail--card">
                        <span className="twitter-icon">
                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        </span>
                        <div className="social--card_data">
                        <p className="data--title">Twitter</p>
                        <p><a href="/">dannzdev</a></p>
                        </div>
                    </article>

                    <article className="social-detail--card">
                        <span className="linkedin-icon">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </span>
                        <div className="social--card_data">
                        <p className="data--title">LinkedIn</p>
                                <p><a href='/'></a>dannzdev</p>
                        </div>
                    </article>

                    <article className="social-detail--card">
                        <span className="github-icon">
                            <i className="fa fa-github-square" aria-hidden="true"></i>
                        </span>
                        <div className="social--card_data">
                        <p className="data--title">Github</p>
                        <p><a href="/">dannzdev</a></p>
                        </div>
                </article>
                
                    </div>
                </section >
    
    )
}

export default Social;