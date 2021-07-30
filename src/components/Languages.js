import React from 'react';
import '../styles/main.css';

const Languages = () => {
    return (
        <section className="language-info-detail">
            <h2 className="language-info--title">LANGUAGES</h2>


            <div className="language-cards--container">
                <article className="language-detail--card">
                    <span className="flag-icon">
                        <i className="fa fa-flag-checkered" aria-hidden="true"></i>
                    </span>
                    <div className="social--card_data">
                        <p className="data--title">English</p>
                        <p className="data--mastery"><i>Avanzado</i></p>
                    </div>
                </article>

                <article className="language-detail--card">
                    <span className="whiteflag-icon">
                        <i className="fa fa-flag-o" aria-hidden="true"></i>
                    </span>
                    <div className="languaje--card_data">
                        <p className="data--title">Spanish</p>
                        <p className="data--mastery"><i>Nativo</i></p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Languages;