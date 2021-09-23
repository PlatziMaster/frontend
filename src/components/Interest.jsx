import React from "react";
const datas = require('../../data.json');
import '../styles/components/Interest.styl'

const Interest = () => {
    const { data } = datas;
    return (
        <div className="interest">
            <h2>Interest</h2>
            {data.interest.map(item => (
                <ul key={item} >
                    <li>{item.toUpperCase()}</li>
                </ul>
            ))}
        </div>
    )
}

export default Interest;