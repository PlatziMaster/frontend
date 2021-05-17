import React from 'react'

import '../styles/components/About.styl'

export default function About({ profession, phone, email, website, address, social }) {
    return (
        <>
            <h2 className="About-title">{profession}</h2>
            <div className="About-container">
                <div className="About-content">
                    <h3>Contact</h3>
                    <ul>
                        <li className="About-item">
                            <strong>Phone: </strong>
                            <a href={`tel:${phone}`}>{phone}</a></li>
                        <li className="About-item">
                            <strong>e-mail: </strong>
                            <a href={`mailto:${email}`}>{email}</a>
                        </li>
                        <li className="About-item">
                            <strong>Website: </strong>
                            <a href={website} target="_blank">{website}</a>
                        </li>
                        <li className="About-item"><strong>Address: </strong>{address}</li>
                    </ul>
                </div>
                <div className="About-content">
                    <h3>Social Media Links</h3>
                    <ul>
                        {
                            social.map((item, index) =>
                                <li className="Social-item" key={index}><a href={item.url} target="_blank">{item.name}</a></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
