import React from 'react';
import Social from './Social'


const About = ( { about } ) => {
    const { name, profession, address, email, website, phone, avatar, social } = about

    return (
        <section className="About">
            <figure className="About-image">
                <img  src={avatar} alt="" />
            </figure>
            <section>
            <h1 className="About-title">Hi, i am {name} - {profession}</h1>
            <ul className="About-personalData">
                <li className="About-item">
                    <div>.</div>
                    <p>{address}</p>
                </li>
                <li className="About-item">
                    <div></div>
                    <p>{email}</p>
                </li>
                <li className="About-item">
                    <div></div>
                    <p>{website}</p>
                </li>
                <li className="About-item">
                    <div></div>
                    <p>{phone}</p>
                </li>
            </ul>
            <section className="About-social">
                <h2 className="About-subtitle">Social</h2>
                <Social social={social}/>          
            </section>
        </section>
        </section>
    )

}


export default About