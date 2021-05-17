import React from 'react';

const Languages = ({ name, percentage}) => (
    <div className="Languages-title">
        <h3 className="Languages-item">{`${name}, ${percentage}`}</h3>
    </div>
);

export default Languages;