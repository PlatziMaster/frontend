import React from "react";
import '../styles/components/Footer.styl';
const datas = require('../../data.json');

const Footer = () => {
    const {data} = datas;
    return(
        <div className="footer">
            {    
                data.social.map(item =>(
                    <a  key={item.url} href={item.url}>{item.name.toUpperCase()}</a>
                ))
            }
        </div>
    )
}

export default Footer