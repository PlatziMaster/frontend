import React from "react";
import '../styles/components/About.styl'
import getData from "../utils/getData";
const About = () => {
    const { data, loading } = getData('http://localhost:3000/data');
    return (
        <div className="about-container">
            {
                loading ? <h3>Cargando....</h3>
                :
                <div className="about-avatar">
                <img src={data.avatar} alt={data.name} />
                <div className="about-info">
                    <h2>{data.profession}</h2>
                    <h3>{data.name}</h3>
                    <p>{data.phone}</p>
                </div>
            </div>
            }
            <div className="about-detalle">
                <p>{data.address}</p>
                <p>{data.website}</p>
                <p>{data.email}</p>
            </div>
        </div>
    )
}
export default About;