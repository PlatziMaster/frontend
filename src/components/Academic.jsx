import React from "react";

const Academic = ({ data }) => {
    const academic = data.Academic;

    return (
        <div className='nes-container is-rounded'>
            <h2>Estudios</h2>
            <ul>
                {academic?.map(({ degree, description, endDate, institution, startDate }) => (
                   <li key={institution}>
                       <h3 >{degree}</h3>
                       <h4 >{institution}</h4>
                       <p>{description}</p>
                       <a>Tiempo: Del {startDate}</a>
                       <span> al </span>
                       <a>{endDate}</a>
                   </li>
                ))}
            </ul>   
        </div>
    );

};

export default Academic;