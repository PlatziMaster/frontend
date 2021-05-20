import React from 'react';

const Languages_item = ({language}) => {

    const {name, percentage} = language;

    return (
        <div className="language-item">
            <label >{name}</label>
            <div>
                <progress id="language-per" max="100" value={percentage}>{percentage}</progress>
                <span>{percentage}%</span>
            </div>
        </div>
    );
}

export default Languages_item;
