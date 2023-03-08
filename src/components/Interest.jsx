import React from "react";

const Interest = ({ data }) => {
    const interest = data.interest;

    return (
        <div className='nes-container is-rounded'>
            <h2>Intereses</h2>
            <ul>
                {interest?.map(data => (
                <li key={data}>
                <h3>{data}</h3>
                </li>
                ))}
            </ul>
        </div>
    );

};

export default Interest;