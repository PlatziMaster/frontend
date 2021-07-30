import React from 'react';
import '../styles/main.css';

const Profile = ({profile}) => {
    return (
            <section className="profile-card_container">

                    <h2 className="profile-card--title cards--title"><span className="user-icon">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </span>PROFILE</h2>
                    <article className="profile-card__details--container">
                        <p className="profile-card__details--description">{profile}
                    </p>

                </article>
            </section>
        )
    }

export default Profile;
