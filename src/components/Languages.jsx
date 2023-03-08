import React from "react";

const Languages = ({ data }) => {
    const languages = data.languages;
    return (
        <div className='nes-container is-rounded'>
            <h2>Idiomas</h2>
            <ul>
                {data.languages?.map(({ name, percentage }) => (
                   <li key={name}>
                       <h3 >{name}</h3>
                       <progress className="nes-progress" value={percentage} max="100"></progress>
                   </li>
                ))}
            </ul>
        </div>
    );

};

export default Languages;