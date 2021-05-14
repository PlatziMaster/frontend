import React from 'react';
import '../styles/components/Subtile.css';

const SubTile = ({color, company, jobTitle, startDate, endDate, jobDescription })=>{
    return(
        <li className={`Subtile Subtile--${color} Experience-item Academic-item`}>
            <h3 className="Subtile__company">{company}</h3>
            <h4 className="Subtile__jobTitle">{jobTitle}</h4>
            <div className="Subtile__date">{startDate} - {endDate} </div>
            <p className="Subtile__jobDescription">{jobDescription}</p>
        </li>
    )
}

export default SubTile;