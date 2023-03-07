import React from "react";

const Experience = ({ data }) => {
    return (
        <div className='nes-container is-dark with-title'>
            <h2>Experiencia</h2>
            <ul>
                {data.experience?.map(({ company, endDate, startDate, jobTitle, jobDescription }) => (
                   <li key={company}>
                       <h3 >{jobTitle}</h3>
                       <p>{jobDescription}</p>
                       <a>Empresa: {company}</a>
                       <span>, </span>
                       <a>Tiempo: {startDate}</a>
                       <span> al </span>
                       <a>{endDate}</a>
                   </li>
                ))}
            </ul>
        </div>
    );

};

export default Experience;