import React from 'react'

const About = ({name,phone,profession,avatar,email,website,address}) => {
    return (
        <>
            <div className="row">
                <div className="col-md-3 text-center">
                    <img width="128" className="rounded-circle" src={avatar} alt=""/>
                </div>
                <div className="col-md-5 text-center ">
                    <h5 className="card-title fs-2">{name}</h5>
                    <h5 className="card-title">{profession}</h5>
                    <p className="card-text"><i className="fas fa-map-marker-alt"></i> {address}</p>
                </div>
                <div className="col-md-4 text-center">
                    <h5 className="card-title">Contact</h5>
                    <p className="card-text">
                    <a href={`https://api.whatsapp.com/send?phone=${phone}`} className="btn btn-outline-info "><i className="fab fa-whatsapp"></i> +{phone}</a><br/>
                    <a href={`mailto:${email}`} className="text-info "> {email}</a><br/>
                    <a href={website} className="text-info "> {website}</a><br/>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
