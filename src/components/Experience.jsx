import React, { useContext } from "react";
import '../styles/components/Experience.styl';
import DataContext from "../context/DataContext";


const Experience = () => {
    const {data} = useContext(DataContext);
    return (
        <div className="experience-container">
            <h2>Experience</h2>
            <div className="experenci">
            {data.experience.map(item => (
                    <ul key={item.company} >
                        <h4>{item.company}</h4>
                        <li>{item.jobTitle}</li>
                        <li>{item.endDate}</li>
                        <li>{item.jobDescription}</li>
                        <li>{item.startDate}</li>
                    </ul>
            ))}
            </div>
            <hr />
        </div>
    )
}

export default Experience;